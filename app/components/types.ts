import { GestureResponderEvent } from "react-native";

export type ColoredButtonProps = {
  backgroundColor: string;
  textColor: string;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  height?: number;
  width?: number;
  borderRadius?: number;
};
