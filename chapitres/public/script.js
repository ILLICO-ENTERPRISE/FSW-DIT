const h2 = document.querySelector('h2')
const h2s = document.querySelectorAll('h2')
const h2ById = document.getElementById('h21')

// <h2>Manipulation du DOM</h2>
console.log(h2)

// NodeList(2)[h2, h2]
console.log(h2s)

// <h2 id="h21">Manipulation du DOM</h2>
console.log(h2ById)

// id permet de définir un sélécteur
// class permet de définir un sélécteur
// <h2 id="h21">Manipulation du DOM</h2>
console.log(document.querySelector("#h21"))

// <h2 id="h22" class="h22Class">Manipulation du DOM</h2>
console.log(document.querySelector(".h22Class"))
console.log('\n')

/**
 * [getElementInDom description]
 * @param  {String} selector [description]
 * @return {HTMLElement}          [description]
 */
function getElementInDom(selector) {
  let result = document.querySelector(selector)

  // Expression Ternaire
  // 33-35 ( expression ternaire )
  if (!result) return;

  return result
}

console.log(getElementInDom("h2"))
console.log('\n')

/**
 * [getElementInDom description]
 * @param  {String} selector [description]
 * @return {HTMLElement}          [description]
 */
function getElementsInDom(selector) {
  let result = document.querySelectorAll(selector)

  if (Array.from(result).length === 0 ) return;

  return result
}

console.log(getElementsInDom("h2"))
console.log('\n')


// Simulation de la condition
// Lorsque result est null
console.log(getElementInDom())
console.log('\n')
console.log(getElementsInDom())
console.log('\n')