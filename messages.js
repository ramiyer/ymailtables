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



function buildSearchQuery(searchReqs){
	
	y.log("searchReqs are ");
	y.log(searchReqs);
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
	
	if (inputs['query'] != null){
		searchParams += '"' +inputs['query']+ '"' + " ";
	}
	if (inputs['to'] != null){
		searchParams += '"' +inputs['to']+ '"' + " "; 
	}
	if (inputs['from'] != null){
		searchParams += '"' +inputs['from']+ '"' +" ";
	}
	if (inputs['cc'] != null){
		searchParams += '"' +inputs['cc'] + '"' + " ";
	}
	if (inputs['bcc'] != null){
		searchParams += '"' +inputs['bcc'] + '"' + " ";
	}
	if (inputs['subject'] != null){
		searchParams += '"' +inputs['subject']+ '"' + " ";
	}
	if (inputs['attachmenttype'] != null){
		searchParams += '"' +inputs['attachmenttype'] + '"' + " ";
	}
	if (inputs['attachmentname'] != null){
		searchParams += '"' +inputs['attachmentname'] + '"' + " ";
	}
	if (inputs['attachment'] != null){
		searchParams += '"' +inputs['attachment'] +'"' + " ";
	}
	if (inputs['attachmentlanguages'] != null){
		searchParams += '"' +inputs['attachmentlanguages']+ '"' + " " ;
	}
	if (inputs['attachmentcount'] != null){
		searchParams += '"' +inputs['attachmentcount'] + '"' +" ";
	}
	if (inputs['flags'] != null){
		searchParams += '"' +inputs['flags'] +'"' + " ";
	}
	if (inputs["fid"] != null){
		searchParams += '"' +inputs['fid'] +'"' + " ";	
	}
	y.log("searchParamss built is");
	y.log(searchParams);

	return searchParams;
	
}
