/*
useful for doing a mass find replace with document size over 200+ pages in multple tabs

Uses script's metadata in case overloads before completion

*/


const textToFind = 'whateverTextToBeReplaced'; //← update!
const replacerText = 'textToBeReplaced';  //← update!
const resetCount = false;// set to true to reset count
const iFile = '?????????????';// file id
const doSaveAfter = 25;

var zFileLimit;
var zTabCount;//counts tabs if overloads
function changeValues() {
  const wholeDoc = DocumentApp.openById(iFile);
  if (resetCount) {
    saveMetadata_(0);
    return null;
  }
  zTabCount=0;
  zFileLimit = parseInt(getTabCount_(),10)+doSaveAfter;
  
  const allTabs = wholeDoc.getTabs();
  for (let i = 0; i < allTabs.length; i++) {
    let eTab = allTabs[i];
    changeTab_(eTab);
  }
}

function changeTab_(aTab) {
  let completedTabs = getTabCount_();

  if (zTabCount >= parseInt(completedTabs,10) & zTabCount<=zFileLimit ) {

    let anySubTabs = aTab.getChildTabs();
    if (anySubTabs.length > 0) {
      for (let i = 0; i < anySubTabs.length; i++) {
        let eachTab = anySubTabs[i];
        changeTab_(eachTab);
      }
    }
      let oldValue = aTab.asDocumentTab().getBody().getText();
      if (oldValue.indexOf(textToFind) > 0) {
        aTab.asDocumentTab().getBody().replaceText(textToFind, replacerText);
      }
    saveMetadata_(zTabCount + 1);
  }
  zTabCount++;
  if(zTabCount % 5 === 0){
     Logger.log("Completed: " + zTabCount );
     Logger.log("Script Save " + getTabCount_())
  }
}

function saveMetadata_(z) {
  const props = PropertiesService.getScriptProperties();
  props.setProperty('tabsCompleted', z);
}

function getTabCount_() {
  let aResponse = PropertiesService.getScriptProperties().getProperty('tabsCompleted');
  return (aResponse || "0");
}
