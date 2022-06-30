/**
 * Updates the a form multiple choice item
 * with days. Should be run once a day.
 * Does NOT skip days for completion
 */
function updateSelectionChoices_(theFormID, theQuestionID, daysBack, includeTodayAsTrue,includeOtherOption) {
  var theDay = new Date();
  if(includeTodayAsTrue){
    theDay.setDate(theDay.getDate() + 1);
  }
  var dayChoices = [];

  for (let i = 0; i < daysBack; i++) {
    theDay.setDate(theDay.getDate() - 1);
    dayChoices.push(theDay.toLocaleDateString());
  }
  var q = FormApp.openById(theFormID)
    .getItemById(theQuestionID).asMultipleChoiceItem();
    
    q.setChoiceValues(dayChoices);
    q.showOtherOption(includeOtherOption);
}
