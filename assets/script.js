const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// parti variable globale
let index = 0

// variable ciblage emplacement des bullets points
const conteneurBullet = document.querySelector(".dots");

// creation fonctionnement pour ajouter les bullets points
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const bullet = document.createElement("div");
		bullet.classList.add("dot");
		conteneurBullet.appendChild(bullet);
		if (i === index) {
			bullet.classList.add("dot_selected");
		}
	}
};

// variable ciblage fleche dorite + image + text
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const texte = document.querySelector("#banner p");
// creation fonctionneent du click droit
function clickRight() {
	arrowRight.addEventListener("click", () => {
		console.log("fleche droite");
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		img.src = slides[index].image;
		texte.innerHTML = slides[index].tagLine;
		arrayDots[index].classList.add("dot_selected");
	});
}

// creation fonctionneent du click gauche
function clickLeft() {
	arrowLeft.addEventListener("click", () => {
		console.log("fleche gauche");
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		index--;
		if (index < 0) {
			index = slides.length - 1;
		}
		img.src = slides[index].image;
		arrayDots[index].classList.add("dot_selected");
	});
}
function main() {
	displayDots();
	clickRight();
	clickLeft();
}
main();