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

function searchMessages(searchParams){
	
}

/*
 * Request analyzer- Analyzes the request and responds with the API call to execute and
 * values of its params
 */

function requestAnalyzer(reqs){
	// Check to see if there are any search attributes present.	
    if(){
	// check what are the search attrs and build the string	
	//pass the attrs
//		buildSearchString();		
		
		
	}

}



function buildSearchQuery(searchReqs){

}