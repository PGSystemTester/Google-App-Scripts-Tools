## Scoping Script To Current File
```
/**
 * @OnlyCurrentDoc
 */
```

## Helpful Keyboard ShortCuts For Google App Scripts

- `[Ctrl] /`  = comment/uncomment block of code.
- `[Alt] /` = autocomplete a variable.
- `[Ctrl] R` = Run current function.
- `[Ctrl] S` = Save work.

## Proper Syntax of Functions
Example of defining custom function
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
