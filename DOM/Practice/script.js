const btn = document.querySelector('#user-text-btn')
const inp = document.querySelector('#user-text-input')
const section = document.querySelector('#text-section')
let counter = 0;
function appendElement () {
    const text = inp.value;
    if (!text) {
        throw new Error('null-text')
    }
    const divText = document.createElement('div')
    divText.innerText = text;
    divText.classList.add('text-comment')
    divText.id = `text-comment-${counter}`
    section.append(divText)
    counter++;
    inp.value = "";
}


btn.addEventListener('click', appendElement)