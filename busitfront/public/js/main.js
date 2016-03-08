$(function(){
	$(".countdown1").countdown("2016/03/08 16:00:00", function(event) {
	    $(this).text(
	       event.strftime('%M minutes %S seconds')
	    );
  	});
  	$(".countdown2").countdown("2016/03/08 16:00:00", function(event) {
	    $(this).text(
	       event.strftime('%M minutes %S seconds')
	    );
  	});
  	
  	$('.datepicker').pickadate();
  	$('.timepicker').pickatime({
		  // Escape any “rule” characters with an exclamation mark (!).
		  format: 'H:i',
	});
  	  	
});
