function LogAllFormItemsBasic() {
  var thisForm = FormApp.getActiveForm();
  var theText =  ''
  thisForm.getItems().forEach(function(theItem){
    theText = theText 
      + '\n\nIndex: ' + theItem.getIndex()
      + '\n\tID:' + theItem.getId()
      + '\n\tTitle:' + theItem.getTitle()
      + '\n\tHelpText:' + theItem.getHelpText()
      + '\n\tType:' + theItem.getType()
  });
  Logger.log(theText);
}
