/*
* @OnlyCurrentDoc
*/

/**
 * Splits cell values similar to text to column. Built after MS Announced new functions 2022.
 *
 * @param {string} theText the text to search
 * @param {string} col_delimeter The Column Splitter
 * @param {[string]} row_delimiter Optional row spliter
 * @param {[boolean]} ignore_empty skip empty values.
 * @param {[string]} pad_with not seeup yet
 * @return An array of new text values.
 * @customfunction
 */
function zTextSplit(theText, col_delimeter, row_delimiter, ignore_empty, pad_with) {
  var allLines = [];

  if (row_delimiter === ''|| row_delimiter===undefined) {
    allLines = theText.split(col_delimeter);
    if(ignore_empty){
      allLines = allLines.filter(x => x != '');
    }
    return [allLines];
  } else {
    var oneLine = [];
    ;
    var zIndex = 0;
    if (row_delimiter != "") {
      var endCharcter = row_delimiter;
    } else {
      endCharcter = col_delimeter;
    }

    if (theText.slice(theText.length - 1, theText.length) != endCharcter) {
      theText = theText + endCharcter;
    }

    for (var i = 0; i < theText.length; i++) {
      var zLetter = theText.slice(i, i + 1);
      if (zLetter == col_delimeter || zLetter == row_delimiter) {
        var theCell = theText.slice(zIndex, i);
        zIndex = i + 1;
        oneLine.push(theCell)

        if (zLetter == row_delimiter) {
          if (ignore_empty) {
            oneLine = oneLine.filter(x => x != '');
          }
          if (oneLine.length > 0 || !ignore_empty) {
            allLines.push(oneLine);
          }
          oneLine = [];
        }
      }
    }
    return allLines;
  }

}
