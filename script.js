function highlight() {
    //Write your code here
var change = document.querySelectorAll("strong") ;
	change.forEach(function(word){
		word.style.color = 'green' ;
	});
}


function return_normal() {
    //Write your code here
  var change = document.querySelectorAll("strong") ;
	change.forEach(function(word){
		word.style.color = 'black' ;
	});

}
