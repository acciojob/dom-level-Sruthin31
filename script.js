//your JS code here. If required.
const n = document.getElementId('level');

let total = 0;
let current = n;

while(current){
	total++;
	current = current.parentn;
}
alert("The level of the element is: "+total);