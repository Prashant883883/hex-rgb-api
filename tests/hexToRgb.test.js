
/**
 * Unit tests for the hexToRgb library.
 */

const { assert } = require("chai");
const hexToRgb = require("../hexToRgb");

describe("hexToRgb() unit tests", function () {
    it("converts a hex color with # to RGB", function () {
        assert.deepEqual(hexToRgb("#FF8000"), {
            r: 255,
            g: 128,
            b: 0
        });
    });

    it("converts a hex color without # to RGB", function () {
        assert.deepEqual(hexToRgb("00FF00"), {
            r: 0,
            g: 255,
            b: 0
        });
    });

    it("converts lowercase hex values", function () {
        assert.deepEqual(hexToRgb("#0000ff"), {
            r: 0,
            g: 0,
            b: 255
        });
    });

    it("throws an error for an invalid hex color", function () {
        assert.throws(
            () => hexToRgb("#GG0000"),
            "Invalid hex color"
        );
    });

    it("throws an error for a non-string input", function () {
        assert.throws(
            () => hexToRgb(123456),
            "Hex color must be a string"
        );
    });
});
