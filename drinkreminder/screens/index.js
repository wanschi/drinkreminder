import { Navigation } from "react-native-navigation";

import FirstTabScreen from "../components/App";
import SecondTabScreen from "../components/Analyse";
// import SecondTabScreen from "./SecondTabScreen";
// import PushedScreen from "./PushedScreen";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("example.FirstTabScreen", () => FirstTabScreen);
  Navigation.registerComponent("example.SecondTabScreen", () => SecondTabScreen);
  Navigation.registerComponent("example.PushedScreen", () => FirstTabScreen);
}
