/** @OnlyCurrentDoc */
function getYourSheetInOrder(){
  setSheetsInOrder_(SpreadsheetApp.getActiveSpreadsheet());
}

function setSheetsInOrder_(ss){
  const allSheets = ss.getSheets();
  const allNames = allSheets.map(s => s.getName()).sort();
  for(var i = 0;i<allNames.length;i++){
    var sIndex = i+1;
    var aSheet = ss.getSheetByName(allNames[i]);
    if (aSheet.getIndex()!= sIndex){
        aSheet.activate();
        ss.moveActiveSheet(sIndex);
    }
 }
}
