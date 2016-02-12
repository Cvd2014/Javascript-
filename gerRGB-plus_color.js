


Color1=new Colour('#FFFFF2', "Pearly Gates")


function getRGB_plus_color(hexcolor){
	var split="";
	var sudo="";
	var rgb="";
	var test=hexcolor.split("",7);
	//return test;
	split+=test[0]+","+test[1]+test[2]+","+test[3]+test[4]+","+test[5]+test[6];
	//return split;
	sudo=split.split(",");
	//return sudo;
	rgb="RGB("+parseInt(sudo[1].toString(),16)+","+parseInt(sudo[2].toString(),16)+","+parseInt(sudo[3].toString(),16)+")";
	
	return rgb +" "+ hexcolor.details;
}