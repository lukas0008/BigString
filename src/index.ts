export * from "./fonts";

export class BigFont {
  private font: { [key: string]: string[] } & { break?: string[] } = {};
  private size: number;
  constructor(font: { [key: string]: string[] }) {
    const keys = Object.keys(font);
    if (keys.length === 0) {
      throw new Error("Font is empty");
    }
    let length = font[keys[0]].length;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].length !== 1 && keys[i] !== "break") {
        throw new Error("Font keys must be one character");
      }
      if (font[keys[i]].length !== length) {
        throw new Error("Font is not of uniform size");
      }
    }
    if (
      keys.filter((key) => {
        let keyLength = font[key][0].length;
        for (let i = 0; i < length; i++) {
          if (font[key][i].length !== keyLength) {
            return true;
          }
        }
      }).length
    ) {
      throw new Error("Character has inconsistent width");
    }
    this.font = font;
    this.size = length;
  }
  getTextFromFont = (text: string) => {
    let output = "";
    const split = text.split("");
    for (let i = 0; i < this.size; i++) {
      split.forEach((char, j) => {
        if (!this.font[char])
          throw new Error(`Character '${char}' not in font`);
        output += this.font[char][i];
        if (this.font.break && j < split.length - 1)
          output += this.font.break[i];
      });
      output += "\n";
    }
    return output;
  };
}
