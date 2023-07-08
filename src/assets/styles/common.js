import { Dimensions, PixelRatio } from "react-native";

const MYWIDTH = Dimensions.get("window").width;
const MYHEIGHT = Dimensions.get("window").height;

export const width = (num) =>
  PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100));
export const height = (num) =>
  PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100));
/**
 * Hiển thị giá trị màu
 */
export const color = {
  __bluetext: "#8F9FF8",
  __blacktext: "#404358",
  __grey: "#E6E7EE",
  __colorLine: "#313650",
  __blueluminous: "#48FFDE",
  __matteblack: "#D2D6EF",
};
