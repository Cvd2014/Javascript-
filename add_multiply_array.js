function sum(array){
	var sum=0;
	for(i=0;i<array.length;i++){
		sum+=array[i];
	}
	return sum;
}

//console.log(add(2,3,4,5,6,9,13,56));

function multiply(array){
	product=1;
	for(i=0;i<array.length;i++){
		product=product*array[i];
	}
	return product;
}

function Operate(operator, array){
	
	function multiply(array){
		product=1;
		for(i=0;i<array.length;i++){
			product=product*array[i];
		}
	return product	
	}

	function sum(array){
		var sum=0;
		for(i=0;i<array.length;i++){
			sum+=array[i];
		}
	return sum;
	}


	if (operator==='+'){
		var answer=sum(array);
	}
	else if (operator ==='*'){
		answer=multiply(array);
	}
	else{
		answer='incorrect operator';
	}
	return answer;

}

