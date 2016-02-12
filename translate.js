	
function translate(line){
	line=line.toLowerCase();
	var hold=[];
	var newline='';
	for(i=0;i<line.length;i++){
		if(line[i]!='a'&&line[i]!='e'&&line[i]!='i'&&line[i]!='o'&&line[i]!='u'&&line[i]!=' '){
			letter=line[i];
			hold[i]=letter+'o'+letter;
			//console.log(hold[i]);
		}
		else {
			hold[i]=line[i];
		}
	}
	newline=hold.join('');
	return newline;
}

console.log(translate('Hello you'));
