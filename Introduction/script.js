/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"
function hello() {
console.log("Hello World!");
}

// ----
// écrire des fonctions suivante:
// addition(a, b)
function addition(a, b) {
return a + b ;
}
// soustraction(a, b)
function soustraction(a, b) {
return a - b;
}
// multiplication(a, b)
function multiplication(a, b) {
return a * b;
}
// division(a, b)
function division(a, b) {
return a / b;
}
// concatenation(str1, str2)
function concatenation(str1, str2) {
console.log(str1.concat(str2));
}
// moyenne(a1, a2, a3)
function moyenne(a1, a2, a3) {
return (a1 + a2 + a3)/3;
}

// Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat.
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console

// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
function inverse() {
var a = 5, b = 12;
var c = a;
a = b;
b = c;
console.log("A vaut : " + a + " et B vaut " + b);
}

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
// Cette fonction doit renvoyer un booléen
var isDivisibleBy5 = function(x) {
return x % 5 == 0;
};

// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
// Cette fonction doit renvoyer un booléen
function isDivisibleByN(x, n) {
return x % n == 0;
};

// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console
var double = Math.random();
function genereEtArrondit(double) {
return double.toFixed(2);
};

/**
* Exercices sur les chaînes de caractères
**/

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la première occurence de la lettre 'e' dans cette chaîne
function firstletter(chaine) {
var res = chaine.indexOf('e');
console.log("La position de la première occurence de la lettre e est " + res);
};

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la dernière occurence de la lettre 'e' dans cette chaîne
function lastletter(chaine) {
var res = chaine.lastIndexOf('e');
console.log("La position de la dernière occurence de la lettre e est " + res);
};

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une phrase entière,
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase
function phrase(chaine) {
return chaine.split(" ");
} 

// "" : sépare les mots où il y a des espaces
// 'l' : sépare les mots où il y a un l

// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne
function majuscule(chaine) {
return chaine.charAt(0).toUpperCase() + chaine.slice(1);
};

/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux
function pop1(nom, prenom) {
	alert(nom + " " + prenom);
	// alert(`${nom} ${prenom}`);
}

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console
function pop2() {
	var x = prompt("Saisissez un nombre");
	console.log(x);
}

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs
function pop3() {
	var x = prompt("Saisissez un 1er nombre");
	var y = prompt("Saisissez un 2nd nombre");
	var x1 = parseInt(x);
	var y1 = parseInt(y);
	console.log(x1 + y1);
}

/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales:
var numTab = [45, 99, 357, -33, 1, 8, -78];
function computeSumOfArray() {
	var somme = 0;
	numTab.forEach(function(tab) {
		somme += tab;
	});
	console.log(somme);
	/*var somme = 0;
	for (var i = 0; i < numTab.length; i++) {
		somme = somme + numTab[i];
	}
	console.log(somme);*/
}

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// - construire un tableau vide initialement
// - rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// - utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console
	var tableau = [];
	tableau[0] = 1;
	tableau[1] = 32;
	tableau[2] = "1";
	tableau[3] = "hello";
	tableau[4] = "eric";
	tableau[5] = 684;
	tableau[6] = "toto";
	tableau[7] = "tata";
	tableau[8] = 24;
	tableau[9] = "tutu";

function tab() {
	for (var i = 0; i < tableau.length; i++) {
		console.log(tableau[i]);
	}
}

// 2)
// - reprendre le tableau construit précédemment
// - utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console

function tab2() {
	i = 0;
	while (i < tableau.length) {
		console.log(tableau[i]);
		i++;		
	}
}

/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriétés: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

var eric = {
	nom : "tran",
	prenom : "eric"
}

eric.age = 28;
eric["prenom"] = "erico";