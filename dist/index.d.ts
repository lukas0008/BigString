export * from "./fonts";
export declare class BigFont {
    private font;
    private size;
    constructor(font: {
        [key: string]: string[];
    });
    getTextFromFont: (text: string) => string;
}
