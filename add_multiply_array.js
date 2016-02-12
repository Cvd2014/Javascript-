function add(){
	var sum=0;
	for(i=0;i<arguments.lenght;i++){
		sum+=arguments[i];
		console.log(sum)
	}
	return sum;
}

//console.log(add(2,3,4,5,6,9,13,56));

/function multiply(){
	product=0;
	for(i=0;i<arguments.lenght;i++){
		product=product*arguments[i];
	}
	return product;
}

console.log(multiply(2,3,4,56,67,2,1));/
