function testForResponse(theResponse,theQuestion){
  var theAnswer = theResponse.getResponseForItem(theQuestion).getResponse();
  if(!theAnswer==''){
    return true;
  }
  return false;
}
