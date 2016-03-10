$(function(){
  	
  	$('.datepicker').pickadate({
		  format: 'd mmmm yyyy',
		  formatSubmit: 'dd',
		  hiddenName: true
	});
	
  	$('.timepicker').pickatime({
		  format: 'H:i',
		  formatSubmit: 'H',
		  hiddenName: true,
		  interval: 60,
	});
	
	$('.hdate').pickadate({
		  format: 'd mmmm yyyy',
		  formatSubmit: 'dd.mm.yy',
		  hiddenName: true
	});
  	  	
});
