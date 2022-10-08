"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigFont = void 0;
__exportStar(require("./fonts"), exports);
var BigFont = /** @class */ (function () {
    function BigFont(font) {
        var _this = this;
        this.font = {};
        this.getTextFromFont = function (text) {
            var output = "";
            var split = text.split("");
            var _loop_1 = function (i) {
                split.forEach(function (char, j) {
                    if (!_this.font[char])
                        throw new Error("Character '" + char + "' not in font");
                    output += _this.font[char][i];
                    if (_this.font.break && j < split.length - 1)
                        output += _this.font.break[i];
                });
                output += "\n";
            };
            for (var i = 0; i < _this.size; i++) {
                _loop_1(i);
            }
            return output;
        };
        var keys = Object.keys(font);
        if (keys.length === 0) {
            throw new Error("Font is empty");
        }
        var length = font[keys[0]].length;
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].length !== 1 && keys[i] !== "break") {
                throw new Error("Font keys must be one character");
            }
            if (font[keys[i]].length !== length) {
                throw new Error("Font is not of uniform size");
            }
        }
        if (keys.filter(function (key) {
            var keyLength = font[key][0].length;
            for (var i = 0; i < length; i++) {
                if (font[key][i].length !== keyLength) {
                    return true;
                }
            }
        }).length) {
            throw new Error("Character has inconsistent width");
        }
        this.font = font;
        this.size = length;
    }
    return BigFont;
}());
exports.BigFont = BigFont;
