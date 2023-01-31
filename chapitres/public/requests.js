// Axios
// https://axios-http.com/
// API ( DATAMUSE )
// https://www.datamuse.com/api/
// Formattage: application/json
// Encodage: UTF-8


const BASE_URL = 'https://api.datamuse.com'

// Récupérer l'élément gallery du DOM
const galleryElement = document.querySelector('.gallery')


/**
 * [buildGallery description]
 * @param  {String} word  [description]
 * @param  {Number} score [description]
 * @param  {Array} table [description]
 * @return {String}       [description]
 */
function buildGallery(listdata) {
  // Initialise la liste
  // PARENT ELEMENT ( PARENT NODE )
  // document.createElement('ul')
  let start = ''

  // On construit les CHILD
  // CHILD ( PARENT ( CHILD ) )
  // li = document.createElement('li') => TYPE NODE
  // document.createElement('ul').appendChild(li)
  Array
    .from(listdata)
    .forEach(function(item) {
      if (item.tags === null || item.tags === undefined) {
        start += `<div class='card'>
					<h3>${item.word}</h3>
					<p>${item.score}</p>
				</div>
				`
      } else {
        let ul = ''
        let li = ''

        Array
          .from(item.tags)
          .forEach(function(item) {
            li += `<li>${item}</li>`
          })

        ul = `<ul>${li}</ul>`

        start += `<div class='card'>
          <h3>${item.word}</h3>
					<p>${item.score}</p>
					<p>${ul}</p>
				</div>`
      }

    })

  return start
}


/**
 * [fetchData description]
 * @param  {String} keyword [description]
 * @return {Array}         [description]
 */
function fetchData(keyword) {

  let url = `${BASE_URL}/words?${keyword}`
  let element = ''

  // etat initial
  // L'animation

  axios.get(url)
    .then(function(response) {
      // Resultat attendu
      // {word: 'dja', score: 80, numSyllables: 1}
      // console.log(response.data)
      // buildGallery(response.data)
      // Clean le contenu de l'élément GALLERY
      galleryElement.innerHTML = ''
      // Inject la réponse dans le DOM
      galleryElement.innerHTML = buildGallery(response.data)

    })
    .catch(function(error) {
      console.log(error)
    })

}

// keyword: ml=duck&sp=b*
fetchData('ml=duck&sp=b*')

// TEST 1
// buildCard([
//  { word: 'papa', score: 818818, tags: ['papa', 'maman']},
//  { word: 'papa', score: 818818, tags: ['papa', 'maman']}
// ])

// TEST 2
// buildCard([
//  { word: 'papa', score: 818818, tags: ['papa', 'maman']},
//  { word: 'papa', score: 818818, tags: null}
// ])

