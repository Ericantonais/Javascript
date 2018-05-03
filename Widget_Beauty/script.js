
var allLips = document.querySelectorAll(".lips");
var allFilters = document.querySelectorAll(".filter");
var allDivs = document.querySelectorAll(".container > div");


/* background des filter */
allFilters.forEach(function(filter, i) {
	filter.style.background = "url('images/" + i + ".jpg')";
})

/* Cacher par défaut les lips */
allDivs.forEach(function(div) {
	div.style.height = "50px";
	div.style.overflow = "hidden";
})

/* toggle filter */
for (var i = 0; i < allDivs.length; i++) {
	allDivs[i].addEventListener("click", function() {
		if (this.style.height === "50px") {
			this.style.height = "210px";
			this.querySelector(".filter p:last-child").textContent = "-";
		} else {
			this.style.height = "50px";
			this.querySelector(".filter p:last-child").textContent = "+";
		}
	})
}
