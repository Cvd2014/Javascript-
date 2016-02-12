function range(x1, x2){
	var result=""
	if (x2<x1){
		return -1;
	}
	else{
		for (var a=x1; a<=x2; a++){
			result+=" "+a; 
		}
	}
	return result;
}