// Ce sont des APIs qui les renvoie
// axios.get('/api')
const cardDatas = [
  {
    image: "https://images.unsplash.com/photo-1671127568702-55318b1c991d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2984&q=80",
    title: "Food and drinks",
    description: "African people are best foods and drinks in the world",
    copyright: "make by fsw 2023",
  },
  {
    image: "./public/assets/image01.jpeg",
    title: "Animals",
    description: "In africa country we have all beautiful animals",
    copyright: "make by fsw 2023",
  },
  {
    image: "./public/assets/image01.jpeg",
    title: "Formations and tricks",
    description: "At DIT we have all best practices and tricks",
    copyright: "make by fsw 2023",
  },
];

async function makeColumn(card) {
  const column = document.createElement("div");

  column.classList.add("col");
  column.appendChild(card);

  return column;
}

async function makeCard(options) {
  // Parent Div
  const firstDiv = document.createElement("div");

  // Children div
  const secondDiv = document.createElement("div");
  const thirdDiv = document.createElement("div");
  const fourthDiv = document.createElement("div");

  // Custom parent div class
  firstDiv.classList.add("card");

  // Custom child div class
  secondDiv.classList.add("card-header");
  thirdDiv.classList.add("card-body");
  fourthDiv.classList.add("card-footer");

  // Configure third div
  const h3 = document.createElement("h3");
  h3.innerHTML = options.title;

  const firstP = document.createElement("p");
  firstP.innerHTML = options.description;

  thirdDiv.appendChild(h3);
  thirdDiv.appendChild(firstP);

  // Configure fourth div
  const secondP = document.createElement("p");
  secondP.innerHTML = options.copyright;

  fourthDiv.appendChild(secondP);

  // Configure second div
  const img = document.createElement("img");
  img.setAttribute("src", options.image);

  secondDiv.appendChild(img);

  // Add all children div in parent div
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourthDiv);

  return firstDiv;
}
