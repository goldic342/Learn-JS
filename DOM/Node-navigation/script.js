/* 
FAST info 

Node = everything that is in HTML like <tags>, #text, comments

Element - only HTMl <tags>

Nodes methods: 
    parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling

Elements methods: 
    parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
*/


// Parent Node Traversal

const ul = document.querySelector(".nav-tool");

console.log(ul.parentElement); // element ( HTML <tag>)
// equals, but not every time
console.log(ul.parentNode); // anything in HTML (comment, text, <tag>)

const html = document.documentElement;

// difirence
console.log(html.parentElement);
console.log(html.parentNode);

// Child Node Traversal
console.log("\n");

// using  ul from Parent Node
const ulChildsNode = ul.childNodes; // returns all childs
for (const iterator of ulChildsNode ) {
  console.log(iterator); // print all nodes (text, comments, <tags>)
}
