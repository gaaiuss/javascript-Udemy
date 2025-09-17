const paragraphs = document.querySelector('.paragraphs');
const ps = document.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}