function reverse(line){
	var newLine=""
	for(i=line.length-1;i>=0;i--){
		newLine+=line[i];		
	}
	return newLine;
}
