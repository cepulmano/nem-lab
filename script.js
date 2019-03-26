$(document).ready(function () {

	var ACCOUNT_ADDRESS;
	var PRIVATE_KEY;
	var PUBLIC_KEY;

	// Checker if you have already assigned account in the script
	if(ACCOUNT_ADDRESS !== undefined && PRIVATE_KEY !== undefined && PUBLIC_KEY !== undefined) { $("#start").attr("disabled",true);$("#transfer").attr("disabled",false);$("#generateaccount").attr("disabled",true);};

	function printout(text)
	{
		date = new Date();
		$('#stream').append('<p><b>'+ date.toLocaleString()+':</b> '+ text +'</p>');
	}

	function generateaccount()
	{
		printout("Performing generateaccount!");

		// Write code below to perform the action
	}

	function transfer()
	{
		printout("Performing transfer!");

		// Write code below to perform the transaction
	}

	function provisionnamespace()
	{
		printout("Performing provisionnamespace!");

		// Write code below to perform the transaction
	}

	function createmosaic()
	{
		printout("Performing createmosaic!");

		// Write code below to perform the transaction
	}
	
	function transfermosaic()
	{
		printout("Performing transfermosaic!");

		// Write code below to perform the transaction
	}

	$("#start").click(function() {
		printout("Let's start!");

		$("#start").attr("disabled",true);
		$("#generateaccount").attr("disabled",false);
	});
	
	$("#generateaccount").click(function() {
		generateaccount();

		$("#generateaccount").attr("disabled",true);
		$("#transfer").attr("disabled",false);
	});

	$("#transfer").click(function() {
		transfer();

		$("#transfer").attr("disabled",true);
		$("#provisionnamespace").attr("disabled",false);
	});

	$("#provisionnamespace").click(function() {
		provisionnamespace();

		$("#provisionnamespace").attr("disabled",true);
		$("#createmosaic").attr("disabled",false);
	});

	$("#createmosaic").click(function() {
		createmosaic();

		$("#createmosaic").attr("disabled",true);
		$("#transfermosaic").attr("disabled",false);
	});

	$("#transfermosaic").click(function() {
		transfermosaic();

		$("#transfermosaic").attr("disabled",true);
	});

});