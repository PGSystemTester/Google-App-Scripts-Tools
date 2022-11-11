/** @OnlyCurrentDoc*/
const me = DocumentApp.getActiveDocument();


// Basic objects:
//  const zBody = me.getBody();
//  const zParagraphs = zBody.getParagraphs();
//  const zFirstParagraph = zParagraphs[0];
//  const zTextCount = zFirstParagraph.getText().length;
//  const zWords = zFirstParagraph.getText().valueOf();
//  const allText = zBody.getText().toString();


/*
tests of blank document
*/
function isBlankDoc(theDocument) {
  return theDocument.getBody().getText().toString() === '';
}

function getDocumentFullText(theDocument){
  return  theDocument.getBody().getText().toString();
}
