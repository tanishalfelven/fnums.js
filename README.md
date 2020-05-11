# FNUMS.JS
## Remove magic numbers with this innovative technique!

Welcome to fnums.js! The all inclusive package solution to REMOVE numbers from your codebase.

Take this example:
```js
const fnum = require("fnums.js");

console.log(+fnum()) // => 0
```

Notice how we can CREATE numbers without having to actually define them?

Let's look at another example:
```js
for(let i = fnum(); i < fnum()()()()()()()()()()(); i()) {
    console.log(+i); // => logs numbers 0 -> 9
}
```
Note how `i` can just keep being called as an implicit incrementor.

**Be careful** with value comparisons from `fnums` created numbers. Explicitly casting numbers or using the abstract equality operator (== double equals) is recommended.


#### DISCLAIMER: Please don't actually use this.
