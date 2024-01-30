# Unpivot Data
Google app scripts to unpivot two dimensional data. Not as effecient as writing a google sheets function (See below)

## App Scripts Unpivot
```js
/**
 * Unpivots two dimensional data set to flat data set. Useful for creating flat file from report.
 *
 * @param {E7:k15} dataRange Data quadrant. Number of rows should match the number of rows in rowsAxis while number of columns should match colAxis.
 * @param {E5:K6} colAxis Column Axis above the data range. Can include more than one row.
 * @param {C7:D15} rowAxis Row Axis to the left of the data range. Can include more than one column.
 * @return unpivoted data set
 * @customfunction
 */
function unpivotData(dataRange, colAxis, rowAxis) {
  var theOutput = [];
  for (var i = 0; i < dataRange.length; i++) {
    var aRow = dataRange[i];
    
    for (var j = 0; j < aRow.length; j++) {
        var bRow = [];
        for (var g = 0; g < colAxis.length; g++){
          //gets column members from top to bottom
          bRow.push(colAxis[g][j]);
        }
        for (g = 0; g < rowAxis[i].length; g++) {
          //gets row members from left to right
          bRow.push(rowAxis[i][g]);
        }
        bRow.push(aRow[j]);
        theOutput.push(bRow);
      }
  }
  return theOutput;
}
```

## Google Sheets Unpivot Formula

Better ways to do this on the sheet itself such as using...
```
=Let(dataRng,E7:I11,rowAxis,B7:D11,colAxis,E5:I6, INDEX(SPLIT(FLATTEN(BYROW(rowAxis,LAMBDA(Σ,JOIN("‼", Σ)))&"‼"&BYCOL(colAxis, LAMBDA(Σ, JOIN("‼", Σ)))&"‼"&dataRng),"‼")))
```

