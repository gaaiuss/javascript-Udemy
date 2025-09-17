const lmts = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'section', text: 'Phrase 3'},
    {tag: 'footer', text: 'Phrase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < lmts.length; i++) {
    let {tag, text} = lmts[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);

    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
}

container.appendChild(div);