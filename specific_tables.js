function multiply_table(){
	table="";
	for (var j =1; j<=10; j++){
		for(var i=0; i<arguments.length;i++){
			var a= arguments[i]*j;
			table+="\t"+a;
		}
	table += "\n";
	}
	return table;
}