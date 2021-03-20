/**
 * Creates SHA256 text output.
 * 
 * @param {theInput} theInput The string to be hashed.
 * @return The hashed SHA256 result.
 * @customfunction
 * @OnlyCurrentDoc
 */
function SHA256(theInput) {
  if (Array.isArray(theInput)) {
    var zhexValue = "Select single value";
  }
  else {
    var zValueArray = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, theInput);
    var zhexValue = zValueArray.map(function (byte) {
      var v = (byte < 0) ? 256 + byte : byte;
      return ("0" + v.toString(16)).slice(-2);
    })
  }
  return zhexValue.join("");
}


