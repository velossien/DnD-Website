//start off by calling all three stores
$(document).ready(function(){
 randomizePotion();
 randomizeScroll();
 randomizeWeapon();
});

//----------------------------------------------------------------------------------
//main random function for alchemist (calls random function and makes table)
function randomizePotion(){
	var potions = storeGen(potionsPoisons);
	tableGenerate($('.potionTable'), potions);
	console.log(potions);
}

//----------------------------------------------------------------------------------
//main random function for schrivener (calls random function and makes table)
function randomizeScroll(){
	var scrollList = storeGen(scrolls);
	tableGenerate($('.scrollTable'), scrollList);
	console.log(scrollList);
}

//----------------------------------------------------------------------------------
//main random function for weaponsmith (calls random function and makes table)
function randomizeWeapon(){
	var weapons = storeGen(weaponsAmmo);
	tableGenerate($('.weaponTable'), weapons);
	console.log(weapons);
}

//-----------------------------------------------------------------------------------
//generate store
function storeGen(store) {
	var randomItems =[];
	for (var i=0; i<5; i++) {
		randomItems.push(store[Math.floor(Math.random() * store.length)]);
	}
	return randomItems;	    
}

//-----------------------------------------------------------------------------------
//create table
function tableGenerate (table, items) {
  table.children('tbody').remove();
  table.append($('tbody'));
  for(var i=0; i<items.length;i++)
  {
   table.append('<tr><td>'+items[i].itemName+'</td><td>'+items[i].price+'</td></tr>');
  }
}