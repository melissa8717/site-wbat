$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 01, 28),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " jour" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " heure" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minutes" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " secondes" + ( seconds==1 ? '':'s' ) + " <br />";
		
		}
	});
	
});
