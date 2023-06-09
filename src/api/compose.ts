import xlf from 'src/xlf';
import markdown from 'src/markdown';

export type ComposeParameters = {
    skeleton: string;
    xlf: string;
} & markdown.renderer.DiplodocParameters;

function compose(parameters: ComposeParameters) {
    if (!validParameters(parameters)) {
        throw new Error('invalid parameters');
    }

    const translations = xlf.parser.translationUnits(parameters);
    const translated = markdown.renderer.render({...parameters, translations});

    return translated;
}

function validParameters(parameters: ComposeParameters) {
    const conditions = [
        parameters.skeleton !== undefined,
        parameters.xlf !== undefined,
        xlf.parser.validParameters(parameters),
        markdown.renderer.validDiplodocParameters(parameters),
    ];

    return conditions.reduce((a, v) => a && v, true);
}

export {compose};
export default {compose};
