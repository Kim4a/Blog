// const btn = document.getElementById("click");

// const namesArray = [
// 	{
// 		id: 0,
// 		name: "John",
// 		likes: 0,
// 		dislikes: 0,
// 	},
// 	{ id: 1, name: "Alan", likes: 0, dislikes: 0 },
// 	{ id: 2, name: "Oleg", likes: 0, dislikes: 0 },
// ];

// let selectedPersonId = -1;

// function getRandomName() {
// 	const randomElement = Math.floor(Math.random() * 3);

// 	selectedPersonId = namesArray[randomElement].id;

// 	return namesArray[randomElement].name;
// }

// btn.addEventListener("click", () => {
// 	const svg = btn.children[0];
// 	const userName = getRandomName();

// 	const text = document.createElement("p");

// 	text.classList.add("text");

// 	const user = namesArray.find(el => el.id === selectedPersonId);

// 	if (svg.classList.contains("active")) {
// 		user.dislikes = ++user.dislikes;
// 		text.innerHTML = `${userName}, dislikes this post ${user.dislikes}`;
// 	} else {
// 		user.likes = ++user.likes;
// 		text.innerHTML = `${userName}, likes this post ${user.likes}`;
// 	}

// 	document.getElementsByTagName("body")[0].appendChild(text);
// 	svg.classList.toggle("active");
// });

const form = document.querySelector(".form");
const publish = document.querySelector(".publish");
const cards = document.querySelector(".cards");
const create = document.querySelector(".create");
const close = document.querySelector(".close");

form.style.display = "none";

create.addEventListener("click", function () {
  form.style.display = "block";
  create.style.display = "none";
});

close.addEventListener("click", function () {
  create.style.display = "block";
  form.style.display = "none";
});

const createCard = () => {
  const cardsArray = JSON.parse(localStorage.getItem("cardsArray"));

  cardsArray.forEach((el) => {
    const card = document.createElement("div");

    card.classList.add("card");
    card.innerHTML = `
      <h2 class="card__title">${el.title}</h2>
      <p class="card__description">
        ${el.plaintext}
      </p>
  
      <div class="card__footer">
        <button class="card__btn__like">like</button>
        <p class: "counter_likes"> 0 </p>
        <button class="card__btn__dislike">dislike</button>
        <p class: "counter_dislikes"> 0 </p>
      </div>
    `;

    cards.appendChild(card);
  });
};

const counter__btn__like = querySelector(".counter__btn__like");
const counter_likes = querySelector(".counter_likes");
const counter__btn__dislike = querySelector(".counter__btn__dislike");
const counter_dislikes = querySelector(".counter_dislikes");

// card__btn__like.addEventListener("click", function() {
//     ++counter_likes;
// });

// card__btn__dislike.addEventListener("click", function() {
//     ++counter_dislikes;
// });
// У МЕНЯ НЕ ПОКАЗЫВАЕТСЯ ПУБЛИКАЦИИЯ, ПОЭТОМУ Я ЗАКОММЕНТИЛА

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const messageObject = {};
  const messages = JSON.parse(localStorage.getItem("cardsArray"));

  Array.from(form).map((el) => {
    if (el.hasAttribute("name")) {
      messageObject[el.name] = el.value;
    }
  });

  messages.push(messageObject);
  localStorage.setItem("cardsArray", JSON.stringify(messages));

  createCard();
  messages.length = 0;
  form.reset();
});

window.onload = () => createCard();
