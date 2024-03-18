import colorName from "color-name";

export const hexRgb = (hex) => {
  hex = hex.substring(1);
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return { r: r, g: g, b: b };
};


export const encontrarNombreColor = (rgb) => {
  for (const name in colorName) {
    if (colorName.hasOwnProperty(name)) {
      if (
        colorName[name][0] === rgb.r &&
        colorName[name][1] === rgb.g &&
        colorName[name][2] === rgb.b
      ) {
        return name;
      }
    }
  }
  return "Color no identificado";
};
