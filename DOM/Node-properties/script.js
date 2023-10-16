/* 
FAST info 

innerHTML =  html code inside element (<div> returned inner <b>HTML</b> </div>)
!!! dangerous 
&& 
elemn.innerHTML += '..' === elem.innerHTML = elem.innerHTML + '...' 
(all html code upadating)

outerHTML   = html inside element and element (<b> returned this text and b tag</b>)

!!! unlike innerHTML, writing to outerHTML does not change the element. Instead, it replaces it in the DOM.

data, textNode = for nodes like text and comments. Returned jsut text

textContent = ALL text inside tag (interpretier all like text) !!! SECURE

innerText = just text not deep

BASIC PROPERTIES
value, id, type, other
*/

