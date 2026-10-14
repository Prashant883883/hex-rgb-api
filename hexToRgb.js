
/**
 * Converts a six-digit hexadecimal color to RGB values.
 * @param {string} hex - Color such as "#FF8000" or "FF8000".
 * @returns {{r: number, g: number, b: number}} RGB color values.
 * @throws {Error} If the input is not a valid six-digit hex color.
 */
function hexToRgb(hex) {
    if (typeof hex !== "string") {
        throw new Error("Hex color must be a string");
    }

    const normalizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

    if (!/^[0-9A-Fa-f]{6}$/.test(normalizedHex)) {
        throw new Error("Invalid hex color. Use six hexadecimal digits.");
    }

    return {
        r: parseInt(normalizedHex.slice(0, 2), 16),
        g: parseInt(normalizedHex.slice(2, 4), 16),
        b: parseInt(normalizedHex.slice(4, 6), 16)
    };
}

module.exports = hexToRgb;
