import {compose, ComposeParameters} from './compose';
import {template} from 'src/xlf/generator';

const templateParameters = {
    source: {language: 'en', locale: 'US' as const},
    target: {language: 'ru', locale: 'RU' as const},
    markdownPath: 'file.md',
    skeletonPath: 'file.skl.md',
};

const emptyXLF = template.generate(templateParameters).template.join('');

describe('smoke', () => {
    it('works', () => {
        const parameters = {
            skeleton: '',
            xlf: emptyXLF,
        };

        compose(parameters);
    });
});

describe('validates parameters', () => {
    it('works with valid parameters', () => {
        const parameters = {
            skeleton: '',
            xlf: emptyXLF,
        };

        compose(parameters);
    });

    it('throws on invalid parameters', () => {
        const invalidXLF = {
            xlf: '',
        };

        const invalidSkeleton = {
            xlf: emptyXLF,
        };

        const invalidBoth = {};

        const invalidLang = {xlf: emptyXLF, skeleton: '', lang: 'xx'};

        expect(() => compose(invalidSkeleton as ComposeParameters)).toThrow();
        expect(() => compose(invalidXLF as ComposeParameters)).toThrow();
        expect(() => compose(invalidBoth as ComposeParameters)).toThrow();
        expect(() => compose(invalidLang as ComposeParameters)).toThrow();
    });
});
