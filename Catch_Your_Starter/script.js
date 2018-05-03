var speak = document.querySelector(".speak");
var math = Math.floor(Math.random() * 10 + 1);
var affiche = "";
var pokeball;
var poke_div = document.querySelector("#poke_div");
var poke_img = document.querySelector("#poke_img");
var pokeball1 = document.getElementById("id1");
var pokeball2 = document.getElementById("id2");
var pokeball3 = document.getElementById("id3");
var pokeball4 = document.getElementById("id4");
var pokeball5 = document.getElementById("id5");
var pokeball6 = document.getElementById("id6");
var pokeball7 = document.getElementById("id7");
var pokeball8 = document.getElementById("id8");
var pokeball9 = document.getElementById("id9");
var pokeball10 = document.getElementById("id10");
var compteur = 3;
var isWon = false;


function start() {
	alert("Ready for the game ?");
	speak.style.background = "white";
	speak.innerHTML = "PR CHEN: Find your starter in one of these pokeballs.";
	afficheProgressif();
}
start();

function afficheProgressif() {
	var speak = $('.speak');
	var text = speak.text();
	var text_length = text.length;
	speak.text('');

	var new_text = '';
	var i = 0;
	var timer = setInterval(function(){
	    new_text = new_text + text[i];
	    speak.text(new_text);
	    
	    if(i < text_length-1) {
	        i++;
	    }
	    else {
	        clearInterval(timer);
	    }
	}, 75);     
}

function choose1() {
	pokeball = document.getElementById("id1").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 1 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose2() {
	pokeball = document.getElementById("id2").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 2 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose3() {
	pokeball = document.getElementById("id3").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 3 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose4() {
	pokeball = document.getElementById("id4").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 4 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose5() {
	pokeball = document.getElementById("id5").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 5 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose6() {
	pokeball = document.getElementById("id6").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 6 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose7() {
	pokeball = document.getElementById("id7").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 7 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose8() {
	pokeball = document.getElementById("id8").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 8 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose9() {
	pokeball = document.getElementById("id9").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 9 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function choose10() {
	pokeball = document.getElementById("id10").getAttribute("data-num");
	speak.textContent = "RED: I choose . . . 10 !";
	afficheProgressif();
	bigPokeball();
	hidePokeballs();
}

function bigPokeball() {
	setTimeout(function() {
		poke_div.style.display = "block";
	}, 2500)
}

function hidePokeballs() {
	setTimeout(function() {
		pokeball1.style.display = "none";
		pokeball2.style.display = "none";
		pokeball3.style.display = "none";
		pokeball4.style.display = "none";
		pokeball5.style.display = "none";
		pokeball6.style.display = "none";
		pokeball7.style.display = "none";
		pokeball8.style.display = "none";
		pokeball9.style.display = "none";
		pokeball10.style.display = "none";
	}, 2500)
}

function answer() {
	poke_div.style.display = "none";
	pokeball1.style.display = "flex";
	pokeball2.style.display = "flex";
	pokeball3.style.display = "flex";
	pokeball4.style.display = "flex";
	pokeball5.style.display = "flex";
	pokeball6.style.display = "flex";
	pokeball7.style.display = "flex";
	pokeball8.style.display = "flex";
	pokeball9.style.display = "flex";
	pokeball10.style.display = "flex";

	if(isWon) {
		return restart();
	}

	if (math == pokeball) {
		speak.textContent = "PR CHEN: Congratulations !! You find a pokemon. Your starter is . . .";
		afficheProgressif();

		setTimeout(function() {
			poke_div.style.display = "block";
			pokeball1.style.display = "none";
			pokeball2.style.display = "none";
			pokeball3.style.display = "none";
			pokeball4.style.display = "none";
			pokeball5.style.display = "none";
			pokeball6.style.display = "none";
			pokeball7.style.display = "none";
			pokeball8.style.display = "none";
			pokeball9.style.display = "none";
			pokeball10.style.display = "none";

			if(pokeball == 1 || pokeball == 2) {
				poke_img.src = "images/magikarp.gif";
			} else if (pokeball == 3 || pokeball == 4) {
				poke_img.src = "images/miaouss.png";
			} else if (pokeball == 5 || pokeball == 6) {
				poke_img.src = "images/pikachu.png";
			} else if (pokeball == 7 || pokeball == 8) {
				poke_img.src = "images/rondoudou.png";
			} else if (pokeball == 9 || pokeball == 10) {
				poke_img.src = "images/ronflex.png";
			}

		}, 6500);
		isWon = true;
	} else {
		afficheProgressif(no());
	}
}

function no() {
	if(compteur > 1) {
		compteur--;
		if(pokeball > math) {
			speak.textContent = "BLUE: HAHA ! Loser ! " + compteur + " more chance" + ((compteur > 1) ? "s" : "") + ". It's smaller.";
		} else if (pokeball < math) {
			speak.textContent = "BLUE: HAHA ! Loser ! " + compteur + " more chance" + ((compteur > 1) ? "s" : "") + ". It's bigger.";
		}
	} else {
		speak.style.background = "orange";
		speak.textContent = "You're not very effective. GAME OVER !";
		speak.addEventListener("click", restart);
	}
}

function restart() {
	compteur = 3;
	math = Math.floor(Math.random() * 10 + 1);
	start();
	isWon = false;
	poke_img.src = "images/pokeball.png";
}