/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Functions make use of this to make a request
 */

function requestMethod(method,params){



    var returnedResponse = request.post(content).response;

	return returnedResponse;
}

/*
	Used for post Processing of response based on the filter specified
*/
function postResponseFilter(response,filter ) {


}

/*
 * Function called for any ListMessage api call
 */

function listMessagesReq(){
	
	var method = 'ListMessages';
	var params = '[{}]';
	
	
	//If Null then set to Inbox - This creates a problem when executed with Search hence not having any default value for fid in inputs element
	if(inputs['fid'] == null){
		inputs['fid'] = "Inbox";
	}
	
	var fid = escape(inputs['fid']);
	
	params = '[{' +
                 '    "fid"           : "' + fid + '",' +
                 '    "startMid"      : ' + inputs['startMid'] + ',' +
                 '    "numMid"        : ' + inputs['numMid'] + ',' +
                 '    "startInfo"     : ' + inputs['startInfo'] + ',' +
                 '    "numInfo"       : ' + inputs['numInfo'] +
                 '}]';

	content = '{' +
	           		'"method" : "' + method + '",' +
		          	'"params" : ' + params +
		          '}';
	y.log(content);

	var listMsgReq = '{' +
		            	'"method" : "' + method + '",' +
		            	'"params" : ' + params +
		            '}';
				
	y.log("listMsgReq is ");
	y.log(listMsgReq);
	
	return listMsgReq;
}


/*
function displayMessageParams(mids){
	
	y.log("in displayMessageParams - ready to build the parameters: ");
	
	y.log(mids);
	
	var mids = ["1_12425_2_5025_0_ADa3iGIAAG00TAoKFQDTd3X7j30","1_11819_1_10818_0_AFS3iGIAANEuTAoKFQs55VN6t2U"];
	
//	var mids = new Array();
		
//	var mids = encodeURIComponent(inputs['mids']);
//	mids = inputs['mids'];
//	y.log(mids);
	
	//Add logic to just have one mid in mids - problem with string.length and array.length
//	y.log("inputs mids length");
//	y.log(inputs['mids'].length);
		
	//Check how many mids are there and generate that many message object that many 
	
	y.log("mids crossed");
	var messages = {
	    message: []
	};
	
//	if(inputs['mids'])
	
	y.log("getting ready for loops and mids length is : ");
	y.log(mids.length);
	var i =0;
//	var message= new Array();
	
	for(i=0; i<mids.length; i++) {

		//var midval = encodeURIComponent(mids[i]);
		y.log("mids[i]");
		y.log(mids[i]);
		var midval = mids[i];
		y.log("mids array i");
		y.log(mids[i].toString());
		y.log("midval");
		y.log(midval.toString());
		
		messages.message.push({
			"mid": '1_12425_2_5025_0_ADa3iGIAAG00TAoKFQDTd3X7j30',
	        "restrictCSS": inputs['restrictCSS'],
	        "enableWarnings": inputs['enableWarnings'],
	        "expandCIDReferences": inputs['expandCIDReferences'],
	 		"blockImages": inputs['blockImages']  
	    });
	}
	
	y.log(messages);
	//y.log(messages.toString());
	//y.log(message);
//	y.log(messages.message.toString());
//	y.log("messages.message is ");
//	y.log(message.toString())	;
	
	return messages;
	
}

function objarray(obj) {

	return obj.constructor == Array;

}*/



function buildMsgParams(){
	
//	y.log("in displayMessageParams - ready to build the parameters: ");
	var messageIds = [];
//	y.log('inputs');
//	y.log(inputs['mids']);

//	var initmids = String(inputs['mids']);
//	var flagArrayCheck = false;

	
//	flagArrayCheck = objarray(mids);
//	y.log("mids val data is ");
//	y.log(mids.toString());
	
	//y.log("flag array check");
	//y.log(flagArrayCheck);
	
	//if (flagArrayCheck == true){
	
			//Check how many mids are there and generate that many message object that many 
			var methodReq = {
				method : "GetMessage",
				params : []
			};
			
			var message = [];
			
			for(i=0; i<mids.length; i++) {
				
				y.log(mids[i]);
				message.push({
					"mid": mids[i].toString()
			 	});
			}
			
			methodReq.params.push({
				"fid": inputs['fid'],
				"message" : message ,
				"charsetHint" : inputs['charsetHint']
			});


			y.log("methodReq is ");
			y.log(methodReq);
		
//	}
	/*
	else {
		
			y.log(inputs['mids']);
			var midstring = inputs['mids'].toString();
			
			params = '[{' +
					 		'"fid": "' +escape(inputs["fid"])+ '",' + 
					 		'"message": [{' +
									 	'"mid": "' +midstring+ '"' + 
							'}]' +',' +
					 		'"charsetHint": "' +inputs['charsetHint']+ '"' + ',' + 
					 		'"truncateAt": "' +inputs['truncateAt']+ '"' + ',' +
							'"enableRetry":"' +inputs['enableRetry']+ '"' +
					 '}]';
					
			var ymwsMethod = 'GetMessage';
			methodReq = '{' +
			            '"method" : "' + ymwsMethod + '",' +
			           	'"params" : ' + params +
					'}';
					
			y.log("methodReq");		
			y.log(methodReq);		
		
	}*/

	return methodReq;

}



function searchMessagesReq(){
	
	
	/*
		'"to": "' +inputs['to']+ '"' + ',' +
		'"from": "' +inputs['from']+ '"' + ',' +
		'"cc": "' +inputs['cc']+ '"' + ',' +
		'"bcc": "' +inputs['bcc']+ '"' + ',' +
		'"subject": "' +inputs['subject']+ '"' + ',' +
		'"attachmenttype": "' +inputs['attachmenttype']+ '"' + ',' +
		'"attachmentname": "' +inputs['attachmentname']+ '"' + ',' +
		'"attachment": "' +inputs['attachment']+ '"' + ',' +
		'"attachmentlanguages": "' +inputs['attachmentlanguages']+ '"' + ',' +
		'"attachmentcount": "' +inputs['attachmentcount']+ '"' + ',' +
		'"flags": "' +inputs['flags']+ '"' + ',' +
	*/
	var ymwsMethod = "SearchMessages";
	
	var searchParams = new String();	
//	searchParams = 'null';
	
	if (inputs['to'] != null){
		searchParams += 'to:"' +inputs['to']+ '" '; 
	}
	if (inputs['fr'] != null){
		searchParams += 'from:"' +inputs['fr']+ '" ';
	}
	if (inputs['cc'] != null){
		searchParams += 'cc:"' +inputs['cc'] + '" ';
	}
	if (inputs['bcc'] != null){
		searchParams += 'bcc:"' +inputs['bcc'] + '"' + ' ' ;
	}
	if (inputs['subject'] != null){
		searchParams += 'subject:"' +inputs['subject']+ '" '  ;
	}
	if (inputs['attachmenttype'] != null){
		searchParams += 'attachmenttype:"' +inputs['attachmenttype'] + '"' + ' ' ;
	}
	if (inputs['attachmentname'] != null){
		searchParams += 'attachmentname:"' +inputs['attachmentname'] + '"' + " ";
	}
	if (inputs['attachment'] != null){
		searchParams += 'attachment:"' +escape(inputs['attachment']) +'"' + " ";
	}
	if (inputs['attachmentlanguages'] != null){
		searchParams += 'attachmentlanguages:"' +escape(inputs['attachmentlanguages'])+ '"' + " " ;
	}
	if (inputs['attachmentcount'] != null){
		searchParams += 'attachmentcount:"' +escape(inputs['attachmentcount']) + '"' +' ' ;
	}
	if (inputs['flags'] != null){
		searchParams += 'flags:"' +escape(inputs['flags']) +'"' + " ";
	}
	if (inputs["fid"] != null){
		searchParams += 'folder:' +escape(inputs['fid'])+ ' ';	
	}
	if (inputs['query'] != null){
		searchParams += inputs['query'] ;
	}
	y.log("searchParamss built is");
	y.log(searchParams);
	
	var jsonStr = JSON.stringify(searchParams);
	y.log(jsonStr);

	        // get parameters for the given cascade method
	var params = '[{' +
			'     "search": {' +
								'"query":' +jsonStr+ 
							'}' +',' +
				 '"numInfo": "' +inputs['numInfo'] +'",' + 
				 '"numMid": "' +inputs['numMid']+ '",' +
				 '"sortKey": "'+inputs['sortKey']+ '",' +
				 '"sortOrder": "' +inputs['sortOrder']+ '",' +
				 '"refineBy": "' +inputs['refineBy']+ '"' +
			 '}]';

			
	var content = '{' +
	            '"method" : "' + ymwsMethod + '",' +
	            '"params" : ' + params +
        	  '}';

	y.log("search content is");
	y.log(content);
	return content;
	
}
