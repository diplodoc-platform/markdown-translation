const markdown = `# Заголовок 1

Параграф

- Первый элемент списка
- Второй элемент списка

Заголовок 2
-----------

Параграф содержащий **жирный текст** и *курсив*

А ещё ключевые особенности структуры проекта освещают чрезвычайно интересные особенности картины в целом. Предложения складываются в абзацы — и вы наслаждетесь очередным бредошедевром.

> текст внутри цитаты

1. Первый элемент нумерованного списка
2. Второй элемент нумерованного списка

[Текст ссылки. Всё ещё текст ссылки.](files/file.md "Описание ссылки. Всё ещё описание ссылки.")

![Альтернативный текст картинки. Всё ещё альт. текст картинки.](files/image.png "Титул картинки. Всё ещё титул картинки.")
`;

const skeleton = `# %%%1%%%
%%%2%%%
- %%%3%%%
- %%%4%%%
%%%5%%%
-----------
%%%6%%% **%%%7%%%** %%%8%%% *%%%9%%%*

%%%10%%% %%%11%%%
> %%%12%%%
1. %%%13%%%
2. %%%14%%%

[%%%15%%% %%%16%%%](files/file.md "%%%17%%% %%%18%%%")

![%%%19%%% %%%20%%%](files/image.png "%%%21%%% %%%22%%%")
`;

const translations = new Map<string, string>([
    ['1', 'Heading 1'],
    ['2', 'Paragraph'],
    ['3', 'First list item'],
    ['4', 'Second list item'],
    ['5', 'Heading 2'],
    ['6', 'Paragraph with'],
    ['7', 'bold text'],
    ['8', 'and'],
    ['9', 'italics'],
    [
        '10',
        'Also key features of the project structure highlight extremely interesting features of the picture as a whole.',
    ],
    ['11', 'Sentences add up to paragraphs — and you will enjoy another delirium.'],
    ['12', 'text inside of the blockquote'],
    ['13', 'First ordered list item'],
    ['14', 'Second ordered list item'],
    ['15', 'Link text.'],
    ['16', 'Link text continued.'],
    ['17', 'Link description.'],
    ['18', 'Link description continued.'],
    ['19', 'Alternative image text'],
    ['20', 'Alt. text continued'],
    ['21', 'Image title'],
    ['22', 'Image title continued'],
]);

const markdownWithVariables = `# {{ service-name }} Service

Try out {{ service-name }} and let us know what you think

Also check out [{{ other-service-name }}](files/file.md "{{ other-service-name }} description")

![{{ service-name }} usage screenshot](files/image.png "{{ service-name }} in action")
`;

const skeletonWithVariables = `# %%%1%%%
%%%2%%%

%%%3%%% [%%%4%%%](files/file.md "%%%5%%%")

![%%%6%%%](files/image.png "%%%7%%%")
`;

const translationsWithVariables = new Map<string, string>([
    ['1', '{{ service-name }} Сервис'],
    ['2', 'Попробуйте {{ service-name }} и расскажите нам что вы думаете о нём.'],
    ['3', 'Также присмотритесь к'],
    ['4', '{{ other-service-name }}'],
    ['5', '{{ other-service-name }} описание'],
    ['6', 'скриншот использования {{ service-name }}'],
    ['7', '{{ service-name }} в действие'],
]);

const markdownWithConditionals = `# Document Title

{% if OS == 'iOS' %}

Download the app from the [{{ ios-marketplace }} Store](https://www.apple.com/ios/app-store/).

{% else %}

Download the app from [{{ other-marketplace }} Store](https://play.google.com).

Some text {% if  OS == 'iOS' %} Apple {% else %} Android {% endif %} text continued.

{% endif %}
`;

const skeletonWithConditionals = `# %%%1%%%

{% if OS == 'iOS' %}

%%%2%%% [%%%3%%%](https://www.apple.com/ios/app-store)%%%4%%%

{% else %}

%%%5%%% [%%%6%%%](https://play.google.com)%%%7%%%

%%%8%%% {% if  OS == 'iOS' %} %%%9%%% {% else %} %%%10%%% {% endif %} %%%11%%%

{% endif %}
`;

const translationsWithConditionals = new Map<string, string>([
    ['1', 'Титул Документа'],
    ['2', 'Скачайте приложение из '],
    ['3', '{{ ios-marketplace }} Стора'],
    ['4', '.'],
    ['5', 'Скачайте приложение из '],
    ['6', '{{ other-marketplace }} Стора'],
    ['7', '.'],
    ['8', 'Какой-то текст'],
    ['9', 'Apple'],
    ['10', 'Android'],
    ['11', 'Продолжение текста.'],
]);

const markdownWithLoops = `# Document Title

{% for element in array %}

Some text {{ variable_name }} text continued.

{% endfor %}

before inline loop {% for element in array %} text inside with {{variable}} {% endfor %} after inline loop
`;

const skeletonWithLoops = `# %%%1%%%

{% for element in array %}

%%%2%%%

{% endfor %}

%%%3%%% {% for element in array %} %%%4%%% {% endfor %} %%%5%%%
`;

const translationsWithLoops = new Map<string, string>([
    ['1', 'Титул Документа'],
    ['2', 'Какой-то текст {{ variable_name }} продолжение текста.'],
    ['3', 'Перед однострочным циклом'],
    ['4', 'текст внутри содержащий {{variable}}'],
    ['5', 'после однострочного цикла'],
]);

export {
    markdown,
    skeleton,
    translations,
    markdownWithVariables,
    skeletonWithVariables,
    translationsWithVariables,
    markdownWithConditionals,
    skeletonWithConditionals,
    translationsWithConditionals,
    markdownWithLoops,
    skeletonWithLoops,
    translationsWithLoops,
};

export default {
    markdown,
    skeleton,
    translations,
    markdownWithVariables,
    skeletonWithVariables,
    translationsWithVariables,
    markdownWithConditionals,
    skeletonWithConditionals,
    translationsWithConditionals,
    markdownWithLoops,
    skeletonWithLoops,
    translationsWithLoops,
};
