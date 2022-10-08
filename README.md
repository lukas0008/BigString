# BigString

BigString is a very short and simple library to make text big!

F.e `HELLO!` to:

```
█   █ ██████ █     █      █████  ██
█   █ █      █     █     █     █ ██
█████ █████  █     █     █     █ ██
█   █ █      █     █     █     █
█   █ ██████ █████ █████  █████  ██
```

Currently only one font (LargeFontCaps) is inside of this module but you can easily make more by just constructing the `BigFont` class.

## Usage

To use the LargeFontCaps font which only has characters from A-Z 1-9 and !, just do:

```ts
import { LargeFontCaps } from "BigString";

const myMessage = LargeFontCaps.getTextFromFont("HELLO WORLD!");

console.log(myMessage);
```

I Mentioned before a way to make your own fonts though. You can do it following the structure below:

```ts
import { BigFont } from "BigString";

const MyFont = new BigFont({
  break: new Array(5).fill(" ");
  A: [
    "  ██  ",
    " █  █ ",
    "██████",
    "█    █",
    "█    █",
  ],
  ...
  ...
});
```

Here I just set break to an array of spaces to add a simple space between the letters.

> :warning: **All element in the object must be singular characters**: with one exception, `break`. Its used to determine what should be between the characters.

> :warning: **All the strings in the string array must be the same length**

If you'd like an example of a font, look inside [`src/fonts.ts`](https://github.com/lukas0008/BigString/blob/main/src/fonts.ts) to see how the LargeFontCaps font was created.
