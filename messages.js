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
	Function called for any search message api call
*/

function searchMessages(searchParamss){
	
}

/*
 * Request analyzer- Analyzes the request and responds with the API call to execute and
 * values of its params
 */

function requestAnalyzer(reqs){
	// Check to see if there are any search attributes present.	
    
	// check what are the search attrs and build the string	
	//pass the attrs
//		buildSearchString();		
		
		


}

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

	/*	
		 myObject = {
			"mid":"'+ mids[i]  +'",
			"restrictCSS":"true",
			"enableWarnings":"true",
			"expandCIDReferences":"true",
			"blockImages":"true"
		};
	}*/
	
	/*
		"mid":'"'+midval+'"' +','
        "restrictCSS": '"' +inputs['restrictCSS']+ '"' + ',' +
        "enableWarnings":'"' +inputs['enableWarnings']+ '"' + ',' +
        "expandCIDReferences":'"' +inputs['expandCIDReferences']+ '"' +',' +
 		"blockImages":'"' +inputs['blockImages']+ '"' +
	
	
	*/
	
	y.log(messages);
	//y.log(messages.toString());
	//y.log(message);
//	y.log(messages.message.toString());
//	y.log("messages.message is ");
//	y.log(message.toString())	;
	
	return messages;
	
}

function objarray(obj) {

//	y.log(obj.constructor == Array);
	return obj.constructor == Array;
	
	/*
  	if (obj.constructor == Array)
      	return false;
   	else
      	return true;
	*/
		
}



function buildMsgParams(){
	
	y.log("in displayMessageParams - ready to build the parameters: ");
	var messageIds = [];
	y.log('inputs');
	y.log(inputs['mids']);

	var initmids = String(inputs['mids']);
	var flagArrayCheck = false;
//	var initmidsarray = [];
	// There are two ways to get mids 
	// 1. mids in ('mids val1','mids val2') / mids in ('midval1) or mids='midval' 
	//Check for array or string here
	
	flagArrayCheck = objarray(mids);
	y.log("mids val data is ");
	y.log(mids.toString());
	
	/*
	var newmids = new Array(initmids);
	y.log("newmids");
	y.log(newmids.toString());
	*/
	
	/*
	if (initmids.search(/,/) != -1) {
	
		initmidsarray = initmids.split(',');

		y.log("initmidsarray");
		y.log(initmidsarray);
		y.log(initmidsarray.toString());
		y.log(initmidsarray.length);
		y.log("initmids");
		y.log(initmids);

		flagArrayCheck = objarray(initmidsarray);
		y.log(flagArrayCheck);
	}else {
		flagArrayCheck = false;
	}*/
	
	
	/*
	var initmids = ['1_60714_AGi3iGIAAA39TDIgzAsox0W9CIE','1_59997_ACK3iGIAAF3CTDGHlAlnuiCEQ98'];
	y.log(initmids);
	var flagArrayCheck = false;
	flagArrayCheck = objarray(initmids);
	y.log(flagArrayCheck);
	*/
	
	y.log("flag array check");
	y.log(flagArrayCheck);
	
	if (flagArrayCheck == true){
		
		//	y.log(inputs['mids']);
		//	y.log("object length");
			
			/*
			messageIds.push(inputs['mids']);

			y.log(messageIds.length);
			y.log(messageIds.toString());
			
			//Add logic to just have one mid in mids - problem with string.length and array.length
			y.log("inputs mids length");
			y.log(messageIds.length);         
			
			
			var mids = [];
			
			mids.push = messageIds.split(',');
			
		//	y.log(inputs['mids'].length);
		
//			"restrictCSS": inputs['restrictCSS'],
//	        "enableWarnings": inputs['enableWarnings'],
//	        "expandCIDReferences": inputs['expandCIDReferences'],
//	 		"blockImages": inputs['blockImages']
			*/
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
		
	}else {
		
			y.log(inputs['mids']);
		
		//	y.log(inputs['mids'].length)


		//	y.log(messageIds.mids);
		//	y.log(messageIds);

			//Add logic to just have one mid in mids - problem with string.length and array.length

		//	y.log(inputs['mids'].length);

			//Check how many mids are there and generate that many message object that many 
			/*
			y.log("mids crossed");

			var methodReq = {
				method : "GetMessage",
				params : []
			};
			
			var message = [];
	
			message.push({
				"mid": inputs['mids']
			});
	
			y.log("message");
			y.log(message);

			methodReq.params.push({
				"fid": inputs['fid'],
				"message" : message ,
				"charsetHint" : inputs['charsetHint']
			});


			y.log("methodReq is ");
			y.log(methodReq);
			*/
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
		
	}
	//[{"mid":"1_4867_AKLPjkQAABFWTCVJ9AC4sj6tf3Y","expandCIDReferences":true,"enableWarnings":true,"blockImages":"userpreference"}]
	return methodReq;

}



function buildSearchQuery(){
	
//	y.log("searchReqs are ");
//	y.log(searchReqs);
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
		searchParams += 'fid:"' +inputs['fid'] +'"' + " ";	
	}
	if (inputs['query'] != null){
		searchParams += inputs['query'] ;
	}
	y.log("searchParamss built is");
	y.log(searchParams);
	
	
	
	

	return searchParams;
}
