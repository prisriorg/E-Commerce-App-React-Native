import { Dimensions } from "react-native";

export const getWidth = Dimensions.get("screen").width;
export const getHeight = Dimensions.get("screen").height;
export const getScale = Dimensions.get("screen").scale;
export const getFontScale = Dimensions.get("screen").fontScale;
export const getScreen = Dimensions.get("screen");
export const getWindow = Dimensions.get("window");

