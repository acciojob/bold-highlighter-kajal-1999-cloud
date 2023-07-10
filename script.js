function highlight() {
    //Write your code here
let change = document.getElementByTagName("strong") ;
	for(let i=0; i < change.length; i++){
		change[i].style.color = "green" ;
	}

}


function return_normal() {
    //Write your code here
    let change = document.getElementByTagName("strong") ;
	for(let i=0; i < change.length; i++){
		change[i].style.color = "black" ;
	}

}
