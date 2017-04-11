// plik scripts.js
	var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
	var animal = 'Zielone słonie';
	var animalUpperCased = animal.toUpperCase();
	var textWithElephant = text.replace('Papugi', 'Zielone słonie');

	console.log(textWithElephant.slice(0, (textWithElephant.length)/2));