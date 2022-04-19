function unpivotData(zDataRange, zColAxis, zRowAxis) {
  var theOutput = [];
  for (var i = 0; i < zDataRange.length; i++) {
    var aRow = zDataRange[i];
    for (var j = 0; j < aRow.length; j++) {
      var bRow = [];

      for (var g = 0; g < zColAxis.length; g++) {
        bRow.push(zColAxis[g][j]);
      }
      for (g = 0; g < zRowAxis[i].length; g++) {
        bRow.push(zRowAxis[i][g]);
      }
      bRow.push(aRow[j]);
      theOutput.push(bRow);
    }
  }
  return theOutput;
}
