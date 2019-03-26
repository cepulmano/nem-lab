
# NEM Lab Exercise

Follow the instructions provided below for the lab exercise.

## Complete the script file to perform the following actions:

1. Generate a new NEM Testnet account
2. Using the newly generated account, request for test XEM from the [testnet faucet](http://testfaucet.nem.ph/).
3. After successfully retrieving the test XEM, write a script that can transfer 10XEM to account address **TCGRQERTT6MALSMVM2SYK7GK43LRLY2SYYWAOTHX**. Attach the following message to the transaction: ***This is a sample XEM transfer transaction containing a message***
4. Using the same account, rent a new namespace using **[your_last_name]** as root and **labexercise** as subnamespace. In case that the namespace is not anymore available, feel free to append some digits to make it unique.
5. Create a new mosaic named **[last_name]mosaic**, and set its properties to the following:
	* Divisibility: **4**
	* Initial supply: **5000000000**
	* Transferable: **true**
	* Supply Mutable: **false**
6. Transfer 5000 of the created mosaic to account address **TCGRQERTT6MALSMVM2SYK7GK43LRLY2SYYWAOTHX**

## Submission in Moodle

Compress all files into a ZIP folder and set the filename to **LASTNAME_NEM_LABEXERCISE.zip**

1. Submit a text file containing the following items:
	* Full Name: **[FULL_NAME]**
	* Account Address: **[ACCOUNT_ADDRESS]**
	* Fully Qualified Namespace: **[FQN]**
	* Mosaic Name: **[mosaic_name]**
2. Submit the script file containing your source code.