/**
 * @OnlyCurrentDoc
 */

/*
This procedure will update any multiple 
choice orCheckbox questions (Items) with 
a user's submission in the "Other" text.
*/

const thisForm = FormApp.getActiveForm();

/**
 * Executed when new entry received. This needs to be setup using EDIT --->  Current Project Triggers
 */
function entryMade(e){

  reviewResponse_(e.response);
}

/**
 * Simulates a submission -- only used for testing. Not necassary to run.
 */
function testEntryMade(){
  var allResponses = thisForm.getResponses();
  var aResponse = allResponses[allResponses.length-9];
    reviewResponse_(aResponse);
}
                  
/**
 * Takes a response to a form and reviews if any "other" options were checked.
 */
function reviewResponse_(fullResponse){
  
  var fullIndividualResponses = fullResponse.getItemResponses();
  for(i=0;i<fullIndividualResponses.length;i++){
    var eachResponse = fullIndividualResponses[i];
    var theQuestion = eachResponse.getItem();
    if(theQuestion.getType() == FormApp.ItemType.MULTIPLE_CHOICE){
      checkAnswers_([eachResponse.getResponse()],theQuestion.asMultipleChoiceItem())
    } else if(theQuestion.getType() == FormApp.ItemType.CHECKBOX){
      checkAnswers_(eachResponse.getResponse(),theQuestion.asCheckboxItem())
    }
  }
}

/**
 * Test CHECKBOX and Muliptple choice items and adds if not found in responses.
 */
function checkAnswers_(theResponse,aQuestion){
    
  if(aQuestion.hasOtherOption()){
    // var theChoices = getTextChoices_(aQuestion.getChoices());
    var theChoices = aQuestion.getChoices().map(getTextChoices_);
    
    for(var i=0;i<theResponse.length;i++){
      var eachResponse = theResponse[i];
      if(!theChoices.includes(eachResponse)){
        theChoices.push(eachResponse);
        aQuestion.setChoiceValues(theChoices);
      }
    }
  }
}
     
/**
 * Turns choices into text
 */ 
function getTextChoices_(theItem){

  return theItem.getValue();
}
