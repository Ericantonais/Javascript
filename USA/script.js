var input, listStates, states;
states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function filterStates() {
	setList(states.filter(s => {
		return s.toLowerCase().match(input.value.toLowerCase());
	}));
}

// même chose que la fonction filterStates()
function filterStates2() {
	const etatsFiltres = states.filter(function(state) {
		const stateLow = state.toLowerCase();
		const valLow = input.value.toLowerCase();
		return stateLow.match(valLow);
	});
	setList(etatsFiltres); // on crée une nouvelle list à chaque fois
}

function setList(currentStates) {
	listStates.innerHTML = ""; // on remet le ul à vide

	currentStates.forEach(s => {
		const li = document.createElement("li");
		li.classList.add("item");
		li.textContent = s;
		listStates.appendChild(li);
	});
}

function init() {
	input = document.getElementById("input_filter");
	listStates = document.querySelector("ol");

	setList(states); // on charge la liste entière dès le début

	input.oninput = filterStates;
}

window.addEventListener("DOMContentLoaded", init);



