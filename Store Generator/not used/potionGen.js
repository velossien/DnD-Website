$(document).ready(function(){
 randomizePotion();
});

function randomizePotion(){
	var potion = potionGen();
	var randoPotion = $(".randoPotion");
	randoPotion.text(potion);
	console.log(potion);
}

function potionGen() {
	var bubbly =[];
	for (i=0; i<5; i++) {
		bubbly.push(potionsPoisons[Math.floor(Math.random() * potionsPoisons.length)]);
	}
	return bubbly;	    
}