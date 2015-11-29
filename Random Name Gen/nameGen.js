$(document).ready(function(){
	var name = nameGenerator();
	var rando = $(".rando");
	rando.text(name);
	console.log(name);
});

function nameGenerator() {
	var firstName = firstPart[Math.floor(Math.random() * firstPart.length)] + secondPart[Math.floor(Math.random() * secondPart.length)];
	var lastName = thirdPart[Math.floor(Math.random() * thirdPart.length)] + fourthPart[Math.floor(Math.random() * fourthPart.length)];

	return firstName + " "+lastName;
}
