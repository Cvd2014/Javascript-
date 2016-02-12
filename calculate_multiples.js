function calculate_multiples(multiple,end){
	var sum=0;
	var result=""
	for (i=0; i<=end;i++){
		if (i%multiple==0){
			result+=i+ "";
			sum+=i;
		}
	}
	return "list of numbers: "+result + "\n"+"sum is: "+sum;
}