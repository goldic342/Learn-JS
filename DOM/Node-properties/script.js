//  textContent innerHTML  innerText

const olTitle = document.querySelector('.ol-title')

olTitle.innerText = "Top coding lang by author" // changing only text node in tag

olTitle.innerHTML += "<div>Hello</div>" // unsecure, upgrade all html tag

// upper is equal this
// olTitle.innerHTML = olTitle.innerHTML + "<div>Hello</div>"

console.log(olTitle.textContent) // ALL text in tag and tag childs

// Creating elemnts

const ol = document.querySelector('.items-list')
const newLang = document.createElement('li')
ol.append(newLang)
// appending propreties
newLang.innerText = "Kotlin";
// adding attribute
newLang.setAttribute('class', 'list-item')
newLang.setAttribute('id', 'some-id')
// removing
newLang.removeAttribute('id')

//getting attr
const attribute = newLang.getAttribute('class')
console.log(attribute);

// ading new class

const li = document.querySelector('.list-item')
li.classList.add('new-class')

//removing

li.classList.remove('new-class')

// hasOwnProperty in elements
console.log(li.classList.contains('list-item')) // true

// Styles

const lastLi = ol.lastElementChild
lastLi.style.backgroundColor = "red" // change color to red
// style.cssProperty Warn: text-deocration -> textDecoration





