//start off by calling all three stores
$(document).ready(function(){
 randomizePotion();
 randomizeScroll();
 randomizeWeapon();
});

//----------------------------------------------------------------------------------
//main random function for alchemist (calls random function and makes table)
function randomizePotion(){
	var potions = potionGen();
	tableGenerate($('.potionTable'), potions);
	console.log(potions);
}

function potionGen() {
	var bubbly =[];
	for (i=0; i<5; i++) {
		bubbly.push(potionsPoisons[Math.floor(Math.random() * potionsPoisons.length)]);
	}
	return bubbly;	    
}

//----------------------------------------------------------------------------------
//main random function for schrivener (calls random function and makes table)
function randomizeScroll(){
	var scrolls = scrollGen();
	tableGenerate($('.scrollTable'), scrolls);
	console.log(scrolls);
}

function scrollGen() {
	var paper =[];
	for (i=0; i<5; i++) {
		paper.push(scrolls[Math.floor(Math.random() * scrolls.length)]);
	}
	return paper;	    
}

//----------------------------------------------------------------------------------
//main random function for weaponsmith (calls random function and makes table)
function randomizeWeapon(){
	var weapons = weaponGen();
	tableGenerate($('.weaponTable'), weapons);
	console.log(weapons);
}

function weaponGen() {
	var clang =[];
	for (var i=0; i<5; i++) {
		clang.push(weaponsAmmo[Math.floor(Math.random() * weaponsAmmo.length)]);
	}
	return clang;	    
}

//-----------------------------------------------------------------------------------
//create table
function tableGenerate (table, items) {
  table.children('tbody').remove();
  table.append($('tbody'));
  for(var i=0; i<items.length;i++)
  {
   var formrow = '<tr><td>'+items[i].itemName+'</td><td>'+items[i].price+'</td>';
   table.append(formrow);
  }
}