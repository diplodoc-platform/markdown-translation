import {render, RenderParameters} from './renderer';

import basic from 'src/__fixtures__/basic';
import variables from 'src/__fixtures__/variables';
import filters from 'src/__fixtures__/filters';
import functions from 'src/__fixtures__/functions';
import conditionals from 'src/__fixtures__/conditionals';
import loops from 'src/__fixtures__/loops';
import meta from 'src/__fixtures__/meta';
import notes from 'src/__fixtures__/notes';
import cuts from 'src/__fixtures__/cuts';

describe('smoke', () => {
    test('it works', () => {
        const parameters = {
            markdown: '1',
        };

        render(parameters);
    });
});

describe('validates parameters', () => {
    it('works with valid parameters', () => {
        const parameters = {
            markdown: '1',
        };

        render(parameters);
    });

    it('throws on invalid parameters', () => {
        const parameters = {} as RenderParameters;

        expect(() => render(parameters)).toThrow();
    });
});

describe('skeleton rendering', () => {
    it('renders hashes instead of content of the text tokens', () => {
        const parameters = {
            markdown: basic.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with liquid variables', () => {
        const parameters = {
            markdown: variables.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with liquid filters', () => {
        const parameters = {
            markdown: filters.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with liquid functions', () => {
        const parameters = {
            markdown: functions.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with liquid conditionals', () => {
        const parameters = {
            markdown: conditionals.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with loops', () => {
        const parameters = {
            markdown: loops.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with meta', () => {
        const parameters = {
            markdown: meta.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with notes', () => {
        const parameters = {
            markdown: notes.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });

    it('renders hash instead of the content from markdown with cuts', () => {
        const parameters = {
            markdown: cuts.markdown,
        };

        const rendered = render(parameters);
        expect(rendered).toMatchSnapshot();
    });
});
