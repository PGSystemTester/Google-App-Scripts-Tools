/** @OnlyCurrentDoc */
function sortSheets(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  sortSheetsInASpreadsheet_(ss);
}

function sortSheetsInASpreadsheet_(theSpreadsheet){
  const allSheets = theSpreadsheet.getSheets();
  var allNames = allSheets.map(x => x.getName());
  allNames.sort();

  for(var i = 0;i<allNames.length;i++){
    var oneSheet = theSpreadsheet.getSheetByName(allNames[i]);
    oneSheet.activate();
    theSpreadsheet.moveActiveSheet(i+1);
 }
}
