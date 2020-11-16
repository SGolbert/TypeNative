import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { HomeScreenNavigationProp } from "./types";
import ColoredButton from "../components/ColoredButton";

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const goToProfilePage = () => {
    navigation.navigate("Profile");
  };

  return (
    <MainView>
      <MainText>Welcome!</MainText>
      <StatusBar style="auto" />
      <ColoredButton
        textColor="blue"
        backgroundColor="red"
        text="Profile"
        onPress={goToProfilePage}
      />
    </MainView>
  );
}

export default HomeScreen;

const MainView = styled.View`
  flex: 1;
  background-color: blue;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.Text`
  color: red;
  font-size: 20px;
  height: 200px;
`;
