function find_longest(array){
	var longest="";
	var words=[];
	for (i=0; i<array.length;i++){
		if (array[i].length>longest.length){
			words.pop();
			longest=array[i];
			words.push(array[i]);
		}
		else if(array[i].length===longest.length){
			words.push(array[i]);
		}
	}
	return longest.length+' ' + words;
}