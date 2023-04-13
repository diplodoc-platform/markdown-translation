import {XMLParser, XMLValidator} from 'fast-xml-parser';

const parser = new XMLParser({ignoreAttributes: false});

export type TranslationUnitsByID = Map<string, string>;

function translationUnits(xlf: string): TranslationUnitsByID {
    if (!validParameters(xlf)) {
        throw new Error('invalid parameters');
    }

    const parsed = parser.parse(xlf);
    if (!parsed) {
        throw new Error('invalid XML document');
    }

    const body = parsed?.xliff?.file?.body;

    const ref: Ref = {
        translationUnits: new Map<string, string>(),
    };

    // eslint-disable-next-line no-eq-null, eqeqeq
    if (body == null) {
        throw new Error('failed parsing XLF document');
    }

    translationUnitsRecursive(body, ref);

    return ref.translationUnits;
}

type TranslationUnitsRecursiveParameters = [XLF, Ref];

type XLF =
    | {
          'trans-unit'?: TranslationUnit[];
          [key: string]: unknown | TranslationUnit;
      }
    | {};

type TranslationUnit = {
    target: string;
    source: string;
    '@_id': string;
};

type Ref = {
    translationUnits: TranslationUnitsByID;
};

function translationUnitsRecursive(...[xlf, ref]: TranslationUnitsRecursiveParameters) {
    for (const [key, val] of Object.entries(xlf)) {
        if (key === 'trans-unit' && Array.isArray(val)) {
            handleTranslationUnits(val, ref);
        }

        if (key !== 'trans-unit' && isObject(val)) {
            translationUnitsRecursive(val as XLF, ref);
        }
    }
}

function isObject(o: unknown) {
    return o && typeof o === 'object';
}

function handleTranslationUnits(units: TranslationUnit[], ref: Ref) {
    for (const {target, ...rest} of units) {
        const id = rest['@_id'];
        if (!id) {
            throw new Error('failed parsing xliff no id on trans-unit');
        }

        ref.translationUnits.set(id, target);
    }
}

function validParameters(xlf: string) {
    const conditions = [Boolean(xlf), validXML(xlf)];

    return conditions.reduce((a, v) => a && v, true);
}

function validXML(xml: string) {
    const validation = XMLValidator.validate(xml);

    return typeof validation === 'boolean' && validation;
}

export {translationUnits, validParameters};
export default {translationUnits, validParameters};
