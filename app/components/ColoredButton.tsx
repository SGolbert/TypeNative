import React from "react";
import styled from "styled-components/native";
import { ColoredButtonProps } from "./types";
import { TouchableNativeFeedback } from "react-native";

function ColoredButton({
  backgroundColor,
  textColor,
  text,
  onPress,
  height = 100,
  width = 200,
  borderRadius = 0,
}: ColoredButtonProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <StyledView
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        height={height}
        width={width}
      >
        <ButtonText textColor={textColor}>{text}</ButtonText>
      </StyledView>
    </TouchableNativeFeedback>
  );
}

export default ColoredButton;

const StyledView = styled.View<
  Pick<
    ColoredButtonProps,
    "backgroundColor" | "height" | "width" | "borderRadius"
  >
>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<Pick<ColoredButtonProps, "textColor">>`
  color: ${({ textColor }) => textColor};
  font-size: 30px;
  text-transform: uppercase;
`;
