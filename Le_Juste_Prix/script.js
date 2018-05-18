
var answer = document.querySelector(".answer");
var nombre = Math.floor(Math.random() * 1000 + 1);
var left = document.querySelector(".left");
var i = 9;

function start() {
	alert("Ready for the game ?");
	answer.textContent = "Find a number between 1 and 1000";
}
start();

function submit() {
	var input = Number(document.querySelector(".input").value.trim());
	if(i == 0) {
		answer.textContent = `Vous avez perdu. La réponse était : ${nombre}. Click for restart.`;
		left.addEventListener("click", function() {
			restart();
		});
	} else if (input == nombre) {
		answer.textContent = "You did it ! Click for restart.";
		left.addEventListener("click", function() {
			restart();
		});
	} else if (input < 1 || input > 1000) {
		answer.textContent = "Enter a number between 1 and 1000. " + i + " remaining chance" + ((i > 1) ? "s" : "") + ".";
		i--;
	} else if (input < nombre) {
		answer.textContent = "It's bigger. " + i + " remaining chance" + ((i > 1) ? "s" : "") + ".";
		i--;
	} else if (input > nombre) {
		answer.textContent = "It's smaller. " + i + " remaining chance" + ((i > 1) ? "s" : "") + ".";
		i--;
	} else {
		answer.textContent = "Enter a number between 1 and 1000. " + i + " remaining chance" + ((i > 1) ? "s" : "") + ".";
		i--;
	}
}

function restart() {
	i = 9;
	nombre = Math.floor(Math.random() * 1000 + 1);
	start();
}
