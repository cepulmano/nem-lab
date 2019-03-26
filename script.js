$(document).ready(function () {

	function printout(text)
	{
		date = new Date();
		$('#stream').append('<p><b>'+ date.toLocaleString()+':</b> '+ text +'</p>');
	}

	function generateaccount()
	{
		printout("Performing generateaccount!");

		// Write code below to perform the action

		printout("Generate account: SUCCESS!");
	}

	function transfer()
	{
		printout("Performing transfer!");

		// Write code below to perform the transaction

		printout("Transfer Transaction: SUCCESS!");
	}

	function provisionnamespace()
	{
		printout("Performing provisionnamespace!");

		// Write code below to perform the transaction

		printout("Namespace Provision Transaction: SUCCESS!");
	}

	function createmosaic()
	{
		printout("Performing createmosaic!");

		// Write code below to perform the transaction

		printout("Create Mosaic Transaction: SUCCESS!");
	}
	
	function transfermosaic()
	{
		printout("Performing transfermosaic!");

		// Write code below to perform the transaction
		printout("Transfer Mosaic Transaction: SUCCESS!");
	}
	
	$("#generateaccount").click(function() { generateaccount(); });
	$("#transfer").click(function() { transfer(); });
	$("#provisionnamespace").click(function() { provisionnamespace(); });
	$("#createmosaic").click(function() { createmosaic(); });
	$("#transfermosaic").click(function() { transfermosaic(); });

});