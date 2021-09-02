## Narrow Scope Of Document
```
/**
 * @OnlyCurrentDoc
 */
```

### On Edit Syntax
```
function onEdit(e) {
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
}
```


### Proper Syntax of Custom Function
```
/**
 * Multiplies the input value by 2.
 *
 * @param {number} input The value to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */
function DOUBLE(input) {
  return input * 2;
}
```
