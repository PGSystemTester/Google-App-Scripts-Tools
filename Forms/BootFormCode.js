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
 * Simulates entry made with latest entry
 */
function testEntryMade() {
  const zLatestResponse = thisForm.getResponses()[thisForm.getResponses().length-1]
  reviewResponse_(zLatestResponse);
}

/**
 * Use this to see all properties of items in form
 */
function LogAllFormItemsBasic(aForm) {
  if (aForm == undefined) {
    aForm = thisForm;
  }

  var theText = ''
  thisForm.getItems().forEach(function (theItem) {
    theText = theText
      + '\n\nIndex: ' + theItem.getIndex()
      + '\n\tID:' + theItem.getId()
      + '\n\tTitle:' + theItem.getTitle()
      + '\n\tHelpText:' + theItem.getHelpText()
      + '\n\tType:' + theItem.getType();
    if (theItem.getType() == FormApp.ItemType.MULTIPLE_CHOICE) {
      theText = theText + '\nAllows Other: ' + theItem.asMultipleChoiceItem().hasOtherOption().valueOf();

      var theChoices = theItem.asMultipleChoiceItem().getChoices().map(aChoice => {
        return aChoice.getValue();
      })
    } else if (theItem.getType() == FormApp.ItemType.CHECKBOX) {
      theText = theText + '\nAllows Other: ' + theItem.asCheckboxItem().hasOtherOption().valueOf();
      var theChoices = theItem.asCheckboxItem().getChoices().map(aChoice => {
        return aChoice.getValue();
      })
    }
    if (theChoices != undefined) {
      theText = theText + '\n' + theChoices.join("|");
    }
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
 * Tests if anything received in a response for a certain item
 */
function testForResponse(theResponse, theQuestion) {
  var theAnswer = theResponse.getResponseForItem(theQuestion).getResponse();
  if (!theAnswer == '') {
    return true;
  }
  return false;
}
