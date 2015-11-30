$(document).ready(function(){
 randomizeWeapon();
});

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

function tableGenerate (table, items) {
  table.children('tbody').remove();
  table.append($('tbody'));
  for(var i=0; i<items.length;i++)
  {
   var formrow = '<tr><td>'+items[i].itemName+'</td><td>'+items[i].price+'</td>';
   table.append(formrow);
  }
}