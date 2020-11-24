import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type ColoredButtonProps = {
  backgroundColor: string;
  borderRadius?: number;
  children: ReactNode;
  extraStyles?: string;
  height?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
  textColor: string;
  width?: number | string;
};
