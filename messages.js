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

function listMessages(requestParams){
	
	
	var listMsgResponse = request.post(requestParams).response
	
	return listMsgResponse;
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


function buildMsgParams(mids){
	
	y.log("in displayMessageParams - ready to build the parameters: ");
	
	y.log(mids);
	
	var mids = ["1_59412_AGO3iGIAAJN5TC0W9Qkst262lOM"];
//	1_12210_1_10818_0_AFS3iGIAANEuTAoKFQs55VN6t2U
//	var mids = new Array();
		
//	var mids = encodeURIComponent(inputs['mids']);
//	mids = inputs['mids'];
//	y.log(mids);
	
	//Add logic to just have one mid in mids - problem with string.length and array.length
//	y.log("inputs mids length");
//	y.log(inputs['mids'].length);
//		
	//Check how many mids are there and generate that many message object that many 
	
	y.log("mids crossed");
	
	/*
	var params = {
		method : "GetMessage",
		params : []
	};
	*/
	
	
	var param = {
		method : "GetMessage",
		params : []
	};
	//[{"mid":"1_4867_AKLPjkQAABFWTCVJ9AC4sj6tf3Y","expandCIDReferences":true,"enableWarnings":true,"blockImages":"userpreference"}]
	var message = [];
	

	
	for(i=0; i<mids.length; i++) {
		/*
		message.push({
			"mid": mids[i],
	        "restrictCSS": inputs['restrictCSS'],
	        "enableWarnings": inputs['enableWarnings'],
	        "expandCIDReferences": inputs['expandCIDReferences'],
	 		"blockImages": inputs['blockImages']  
	    }); */
		
		message.push({
			"mid": mids[i]
	    });
	
	}
	/*
		params.message.push("mid" : '1_12425_2_5025_0_ADa3iGIAAG00TAoKFQDTd3X7j30');
		messages.push("restrictCSS" : "true");
		messages.push("enablewarnings":"true");
		messages.push("expandCIDReferences":"true");
		messages.push("blockImages":"true");
	}*/

	y.log("message");
	y.log(message);
	
	param.params.push({
		"fid": inputs['fid'],
		"message" : message ,
		"charsetHint" : inputs['charsetHint']
	});
	
	
	y.log("mparams");
	y.log(param);
//	y.log(params);
//	y.log(params.toString());
	
	return param;

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
		searchParams += 'to:"' +inputs['to']+ '"'; 
	}
	if (inputs['fr'] != null){
		searchParams += 'from:"' +inputs['fr']+ '" ';
	}
	if (inputs['cc'] != null){
		searchParams += 'cc:"' +inputs['cc'] + '"' + ' ' ;
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
		searchParams += 'attachmentcount:"' +escape(inputs['attachmentcount']) + '"' +" ";
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
