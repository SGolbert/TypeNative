import React from "react";
import styled from "styled-components/native";
import { ColoredButtonProps } from "./types";
import { TouchableOpacity } from "react-native";

function ColoredButton({
  backgroundColor,
  borderRadius = 0,
  children,
  extraStyles = "",
  height,
  onPress,
  textColor,
  width,
}: ColoredButtonProps) {
  // const finalHeight = height !== undefined ? height : 100;
  // const finalWidth = width !== undefined ? width : 200;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <StyledView
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        extraStyles={extraStyles}
        height={height}
        width={width}
      >
        <ButtonText textColor={textColor}>{children}</ButtonText>
      </StyledView>
    </TouchableOpacity>
  );
}

export default ColoredButton;

type Dimension = number | string | undefined;

const parseDimension = (dim: Dimension, defaultValue: number): string => {
  if (typeof dim === "string") {
    return dim.match(/[0-9]+$/) ? dim + "px" : dim;
  } else if (typeof dim === "number") {
    return `${dim}px`;
  } else {
    return `${defaultValue}px`;
  }
};

const StyledView = styled.View<
  Pick<
    ColoredButtonProps,
    "backgroundColor" | "height" | "width" | "borderRadius" | "extraStyles"
  >
>`
  height: ${({ height }) => parseDimension(height, 100)};
  width: ${({ width }) => parseDimension(width, 200)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  justify-content: center;
  align-items: center;
  ${({ extraStyles }) => extraStyles};
`;

const ButtonText = styled.Text<Pick<ColoredButtonProps, "textColor">>`
  color: ${({ textColor }) => textColor};
  font-size: 30px;
  text-transform: uppercase;
`;
