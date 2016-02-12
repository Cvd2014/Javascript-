function times_tables(){
	table=""
	for (var i=1;i<=10;i++){
		for (var j=1;j<=10;j++) {
			var a=i*j;
			table+= "\t" + a;
		}
		table += "\n";	
	}
	return table;
}