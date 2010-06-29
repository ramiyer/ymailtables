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
	
	if (inputs['to'] != null){
		searchParams += 'to:"' +escape(inputs['to'])+ '"' + " "; 
	}
	if (inputs['from'] != null){
		searchParams += 'from:"' +inputs['from']+ '"' +" ";
	}
	if (inputs['cc'] != null){
		searchParams += 'cc:"' +inputs['cc'] + '"' + " ";
	}
	if (inputs['bcc'] != null){
		searchParams += 'bcc:"' +inputs['bcc'] + '"' + " ";
	}
	if (inputs['subject'] != null){
		searchParams += "subject:'" +inputs['subject']+ "'" + " ";
	}
	if (inputs['attachmenttype'] != null){
		searchParams += 'attachmenttype:"' +inputs['attachmenttype'] + '"' + " ";
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
