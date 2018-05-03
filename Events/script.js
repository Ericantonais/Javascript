// Exo 1
var btn = document.querySelector('#bg-button');
function changeBackground() {
var input = document.querySelector('input[type="color"]');
var colorValue = input.value;
document.querySelector('body').style.backgroundColor =
colorValue;
}
btn.addEventListener('click', changeBackground);

// Exo 2
var input = document.querySelector('#exo2');
function dansLeChamp() {
	console.log('dans le champ');
};
function horsDuChamp() {
	console.log('hors du champ');
};
input.addEventListener('focus', dansLeChamp);
input.addEventListener('blur', horsDuChamp);

// Exo 3
input.addEventListener('keypress', function(evt) {
	if(evt.keyCode == 13) {
		alert('touche entrée appuyée');
	}
});
