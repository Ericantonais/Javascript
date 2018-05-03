var list = document.querySelector('ul');
var addBtn = document.querySelector('button#ajouter');
var delBtn = document.querySelector('#supprimer');
var txtInput = document.querySelector('input[type="text"]')

function moveUp (evt) {
	var clickedLi = evt.target.parentNode;
	var ul = clickedLi.parentNode;
	var prevLi = clickedLi.previousElementSibling;
	// cas du premier li
	if(prevLi == null)
	return;
	ul.insertBefore(clickedLi, prevLi);
}

function moveDown(evt) {
	var clickedLi = evt.target.parentNode;
	var nextLi = clickedLi.nextElementSibling;
	// cas du dernier li
	if(nextLi == null)
	return;
	list.insertBefore(nextLi, clickedLi);
}

var ajouter = function() {
	var val = txtInput.value;
	if(val.trim() == "") {
	alert("Le champ est vide");
	} else {
	var arrowUpStr = '<span class="fa fa-arrow-up"></span>';
	var arrowDownStr = '<span class="fa fa-arrow-down"></span>'
	list.insertAdjacentHTML('beforeend', '<li><input type="checkbox" /> ' + val + arrowUpStr + arrowDownStr + '</li>');
	var lis = list.querySelectorAll('li');
	var li = lis[lis.length - 1];
	var up = li.querySelector('.fa-arrow-up');
	up.addEventListener('click', moveUp);
	var down = li.querySelector('.fa-arrow-down');
	down.addEventListener('click', moveDown);
	}
}
addBtn.addEventListener('click', ajouter);

var supprimer = function() {
	var items = list.querySelectorAll('li');
	for(var i = 0; i < items.length; i++) {
		var li = items[i];
		var checkbox = li.querySelector('input');
		var isChecked = checkbox.checked;
		if(isChecked) {
		list.removeChild(li);
		}
	}
	if(items.length == 0) {
			alert("Liste vide !");
	}
};
delBtn.addEventListener('click', supprimer);