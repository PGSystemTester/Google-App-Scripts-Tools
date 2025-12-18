# Google-App-Scripts-Tools
Misc examples/notes I've compiled while using [Google App Scripts](https://developers.google.com/apps-script/reference/).

## Quick References

### Scoping Script To Current File
```js
/**
 * @OnlyCurrentDoc
 */
```

### Proper Syntax of Functions
Example of defining custom function
```js
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


### Keyboard ShortCuts For Google App Scripts

- `[Ctrl] /`  = comment/uncomment block of code.
- `[Alt] /` = autocomplete a variable.
- `[Ctrl] R` = Run current function.
- `[Ctrl] S` = Save work.

