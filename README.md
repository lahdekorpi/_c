# _c
underTheC is a library that makes jQuery absolutely and completely obsolete in every aspect that isn't already handled by modern browsers directly.

The library has two features. If the joke isn't obvious by now, then as a serious note; you don't need jQuery for anything in modern web. This library just has a wrapper for `document.querySelectorAll` and `HTMLElement.addEventListener` to make myself happy.

## Usage
```javascript
let test = _c("div.example #something > li") // Is the same as document.querySelectorAll("div.example #something > li")
_c(test[0]).on("click").then(() => {
  // Is the same as test[0].addEventListener("click",() => {});
});
```
