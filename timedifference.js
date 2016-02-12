function timeDifference(dateStampIn, dateStampOut){
	timeIn=dateStampIn.getTime();
		timeOut=dateStampOut.getTime();

	timeDifference=timeOut-timeIn;//gives time difference in ms
	toSec=timeDifference/1000;//gives time in seconds
	toMin=toSec/60;
	toHours=toMin/60;

	minsPastHour=toMin-(toHours*60);

	return 
	
}