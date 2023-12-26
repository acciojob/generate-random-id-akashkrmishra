function makeid(l) {
  // write your code here
	let str="";
	for(let i=0;i<l;i++){
		str+=String.fromCharCode(generateValCharCode());
	}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

function generateValCharCode(){
	let num=parseInt(Math.random() *100);
	if( (num>=48 && num<=57) ||( num>=65 && num<=90 ) || (num>=97 && num<=99)){
		return num;
	}
	return 100+parseInt(num/5);
}
