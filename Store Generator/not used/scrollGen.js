$(document).ready(function(){
 randomizeScroll();
});

function randomizeScroll(){
	var scroll = scrollGen();
	var randoScroll = $(".randoScroll");
	randoScroll.text(scroll);
	console.log(scroll);
}

function scrollGen() {
	var paper =[];
	for (i=0; i<5; i++) {
		paper.push(scrolls[Math.floor(Math.random() * scrolls.length)]);
	}
	return paper;	    
}