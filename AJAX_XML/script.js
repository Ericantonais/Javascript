const monModule = (function monModule() {
	"use strict";

	let maVarPublique = "je suis publique";

	function setMaVarPublique(val) {
		maVarPublique = val;
	}

	function getMaVarPublique() {
		return maVarPublique;
	}

	console.log("ready to rock !!!");

	function makeAJAXCall(clbk, url, method) {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function getResponse(e) {
			clbk(this.response);
		};
		xhr.send()
	}

	function loadPageContent(ref) {
		function process(resServer) {
			document.getElementById("main_content").innerHTML = resServer;
		}
		makeAJAXCall(process, `pages/${ref}.html`, "GET");
	}

	function getCafes() {
		const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=10000&facet=arrondissement`;
		const main = document.getElementById("main_content");
		
		function getData(res) {
			console.log("liste des cafés");
			const cafes = JSON.parse(res).records;
			const list = document.createElement("ul");
			list.className = "list-cafes"; // remplace 
			// list.classList.add("list-cafes"); ajoute

			cafes.forEach(function(cafe) {
				// console.log(cafe); // chaque café
				const li = document.createElement("li");
				li.className = "item";
				li.textContent = cafe.fields.nom_du_cafe + " " + cafe.fields.arrondissement;
				list.appendChild(li);
			})
			main.appendChild(list);
		}
		makeAJAXCall(getData, url, "GET");
	}

	function handleClickHeader() {
		console.log("haha !!");
	}

	function handleClickItems(e) {
		const src = e.target || e.srcElement; // compatibilité cross-browser...
		// console.log(this);
		// console.log(this === src);
		styleItem(this);
		loadPageContent(this.getAttribute("data-page"));
	}

	// header.addEventListener("click", handleClickHeader);
	function styleItem(item) {
		const prev = document.querySelector("#nav_main .item.is-active");

		if (prev && prev !== item) {
		// if (prev !== null && prev !== this) {
			prev.classList.remove("is-active");
		} else {
			item.classList.add("is-active");
		}
	}

	function loadPageContent(u) {
		console.log("@loadPageContent");
		// Asynchronous JavaScript And XML
		const url = `pages/${u}.html`;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);

		xhr.onload = function getData() {
			console.log("appel AJAX effectué");
			console.log(this);
			document.getElementById("main_content").innerHTML = this.response;
		};
		xhr.send();
	}

	function init() {
		var header = document.getElementById("header_main");
		var items = document.querySelectorAll("#nav_main .item");
		var button_cafe = document.getElementById("button");

		for (let i = 0; i < items.length; i += 1) {
			console.log(items[i]);
			items[i].onclick = handleClickItems;
		}
		header.onclick = handleClickHeader;
		button_cafe.onclick = getCafes;
	}

	/* L'event sera déclenché quand la structure html est chargé (les balises) */
	window.addEventListener("DOMContentLoaded", init);

	/* L'event load sera déclenché quand toute la page est chargée (images, scripts, css compris)*/
	// window.addEventListener("onload", init);

	// on construit une API publique pour monModule
	return {
		setMaVarPublique: setMaVarPublique,
		getMaVarPublique: getMaVarPublique 
	};


}());

console.log(monModule.getMaVarPublique());
monModule.setMaVarPublique("foo");
console.log(monModule.getMaVarPublique());

