import { Dimensions } from "react-native";

export const getWidth = () => {
    return Dimensions.get("screen").width;
}
export const getHeight = () => {
    return Dimensions.get("screen").height;
}
export const getScreen = () => {
    return Dimensions.get("screen");
}
export const getScaleS = () => {
    return Dimensions.get("screen").scale;
}
export const getFontScaleS = () => {
    return Dimensions.get("screen").fontScale;
}
export const getWindow = () => {
    return Dimensions.get("window");
}
export const getScaleW = () => {
    return Dimensions.get("window").scale;
}
export const getFontScaleW = () => {
    return Dimensions.get("window").fontScale;
}
export const getOrientation = () => {
    return Dimensions.get("window").width > Dimensions.get("window").height ? "landscape" : "portrait";
}
export const getAspectRatio = () => {
    return Dimensions.get("window").width / Dimensions.get("window").height;
}
export const getDpi = () => {
    return Dimensions.get("window").scale * 160;
}
export const getDp = (px:number) => {
    return px / Dimensions.get("window").scale;
}
export const getPx = (dp:number) => {
    return dp * Dimensions.get("window").scale;
}
export const getPt = (px:number) => {
    return px * 0.75;
}
export const getPxFromPt = (pt:number) => {
    return pt / 0.75;
}
export const getSp = (px:number) => {
    return px * Dimensions.get("window").fontScale;
}
export const getPxFromSp = (sp:number) => {
    return sp / Dimensions.get("window").fontScale;
}
export const getDpFromPt = (pt:number) => {
    return pt * 4 / 3;
}
export const getPtFromDp = (dp:number) => {
    return dp * 3 / 4;
}
export const getSpFromPt = (pt:number) => {
    return pt * Dimensions.get("window").fontScale;
}
export const getPtFromSp = (sp:number) => {
    return sp / Dimensions.get("window").fontScale;
}
