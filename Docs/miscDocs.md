
## Scope to only current document

```js
/** @OnlyCurrentDoc*/
```



## Basic objects:

```js
const zBody = me.getBody();
const zParagraphs = zBody.getParagraphs();
const zFirstParagraph = zParagraphs[0];
const zTextCount = zFirstParagraph.getText().length;
const zWords = zFirstParagraph.getText().valueOf();
const allText = zBody.getText().toString();

```

## Example Functions

```js
/*
tests of blank document
*/
function isBlankDoc(theDocument) {
  return theDocument.getBody().getText().toString() === '';
}

function getDocumentFullText(theDocument){
  return  theDocument.getBody().getText().toString();
}
```
