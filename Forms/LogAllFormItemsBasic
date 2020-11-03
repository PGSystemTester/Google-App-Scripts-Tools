function LogAllFormItemsBasic() {
  var theForm = FormApp.getActiveForm();
  var allItems = theForm.getItems();
  for (var i = 0; i < allItems.length; i++) {
    var theItem = allItems[i];
    Logger.log('\nThe Title: ' +
      theItem.getTitle() + '\n' +
      'Help Text: ' +
      theItem.getHelpText() + '\n' +
      'The ID: ' +
      theItem.getId() + '\n' +
      'The Type: ' +
      theItem.getType() + '\n'
    );
  }
  Logger.log("All Items Shown");
}
