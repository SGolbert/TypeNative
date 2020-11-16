import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { ProfileScreenNavigationProp } from "./types";
import ColoredButton from "../components/ColoredButton";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function ProfileScreen({
  navigation,
}: {
  navigation: ProfileScreenNavigationProp;
}) {
  const goToHomePage = () => {
    navigation.navigate("Home");
  };

  const [current, setCurrent] = useState<string>("");
  const [chars, setChars] = useState<string[]>([]);

  const changeTextHandler = (text: string) => {
    setCurrent(text);
  };

  const pressHandler = () => {
    setChars([...chars, current]);
  };

  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <MainView>
        <MainText>Your profile!</MainText>
        <StatusBar style="auto" />
        <ColoredButton
          textColor="black"
          backgroundColor="white"
          text="Go back"
          onPress={goToHomePage}
        />
        <StyledInput
          placeholder="Add characteristic"
          onChangeText={changeTextHandler}
        />
        <ColoredButton
          textColor="black"
          borderRadius={20}
          backgroundColor="yellow"
          text="Add"
          onPress={pressHandler}
          width={80}
          height={50}
        />
        <View>
          {chars.map((characteristic) => {
            return <CharText key={characteristic}>{characteristic}</CharText>;
          })}
        </View>
      </MainView>
    </ScrollView>
  );
}

export default ProfileScreen;

const MainView = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  /* justify-content: center; */
`;

const MainText = styled.Text`
  color: white;
  font-size: 20px;
  height: 200px;
`;

const CharText = styled.Text`
  color: white;
  border-color: white;
  font-size: 10px;
  margin-top: 10px;
`;

const StyledInput = styled.TextInput`
  color: white;
  border: white;
  font-size: 15px;
  margin: 10px;
  padding: 5px;
  height: 50px;
  width: 100px;
`;
