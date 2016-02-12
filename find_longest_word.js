function find_longest(array){
	var longest="";
	for (i=0; i<array.length;i++){
		if (array[i].length>longest.length){
			longest=array[i];
		}
	}
	return longest.length;
}