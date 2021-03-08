/**
 * @OnlyCurrentDoc
 */

//Constants
  const thisForm = FormApp.getActiveForm();
  //const ss = SpreadsheetApp.openById(thisForm.getDestinationId());



/**
 * Executed when new entry received. Must setup trigger
 */
function entryMade(e) {
  reviewResponse_(e.response);
}

/**
 * Simulates a submission with latest entry
 */
function testEntryMade() {
  var allResponses = thisForm.getResponses();
  var aResponse = allResponses[allResponses.length - 1];
  reviewResponse_(aResponse);
}


/**
 * Use this to see all properties of items in form
 */
function LogAllFormItemsBasic(aForm) {
  var theText = ''
  thisForm.getItems().forEach(function (theItem) {
    theText = theText
      + '\n\nIndex: ' + theItem.getIndex()
      + '\n\tID:' + theItem.getId()
      + '\n\tTitle:' + theItem.getTitle()
      + '\n\tHelpText:' + theItem.getHelpText()
      + '\n\tType:' + theItem.getType()
  });
  Logger.log(theText);
}

/**
 * Will remove the Item ID at end of descripotion of each item
 */
function removeIdFromItems() {
  addOrRemoveID_(false);
}

/**
 * Will add the Item ID at end of descripotion of each item
 * (Unless already exists)
 */
function addMemberIdToItems() {
  addOrRemoveID_(true);
}


/**
 * Private function called from other two functions
 */
function addOrRemoveID_(addingID) {
  const zzSplitter = "zzzThe_ID: ";
  thisForm.getItems().forEach(function (theItem) {
    var theID = theItem.getId().toString();
    if (addingID && theItem.getHelpText().search(theID === -1)) {
      theItem.setHelpText(theItem.getHelpText() + zzSplitter + theID)
    }
    else if (!addingID && theItem.getHelpText().search(theID) > 0) {
      var newText = theItem.getHelpText();
      newText = newText.replace(zzSplitter, '').replace(theID, '').trim();
      theItem.setHelpText(newText);
    }
  })
}


/**
 * Turns choices into text
 */
function getTextChoices_(theItem) {
  return theItem.getValue();
}

/**
 * Tests if anything received in a response for a certain item
 */
function testForResponse(theResponse, theQuestion) {
  var theAnswer = theResponse.getResponseForItem(theQuestion).getResponse();
  if (!theAnswer == '') {
    return true;
  }
  return false;
}
