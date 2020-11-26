import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { ProfileScreenNavigationProp } from "./types";
import ColoredButton from "../components/ColoredButton";
import { ScrollView } from "react-native-gesture-handler";

import useDimensions from "../../utils/useDimensions";

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

  const { screenWidth } = useDimensions();

  const changeTextHandler = (text: string) => {
    setCurrent(text);
  };

  const addCurrentItem = () => {
    setChars([...chars, current]);
  };

  const removeItem = (item: string) => {
    setChars(chars.filter((char) => char !== item));
  };

  return (
    <MainView>
      <MainText>You have to do this</MainText>
      <StatusBar style="auto" />
      <InputBox>
        <StyledInput
          placeholder="Add task"
          placeholderTextColor="lightgray"
          onChangeText={changeTextHandler}
        />
        <ColoredButton
          textColor="black"
          borderRadius={20}
          backgroundColor="yellow"
          onPress={addCurrentItem}
          width={80}
          height={50}
        >
          Add
        </ColoredButton>
      </InputBox>
      <ScrollView
        style={{
          width: screenWidth,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          alignItems: "flex-start",
        }}
      >
        {chars.map((characteristic) => {
          return (
            <CharTextBox
              key={characteristic}
              width={screenWidth}
              onPress={() => {
                removeItem(characteristic);
              }}
            >
              <CharText>{characteristic}</CharText>
            </CharTextBox>
          );
        })}
      </ScrollView>
      <ColoredButton
        textColor="black"
        backgroundColor="white"
        onPress={goToHomePage}
        height="80"
        width={screenWidth}
      >
        Go back
      </ColoredButton>
    </MainView>
  );
}

export default ProfileScreen;

const MainView = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  /* justify-content: space-between; */
`;

const MainText = styled.Text`
  color: white;
  font-size: 40px;
  margin: 20px 0;
`;

const CharText = styled.Text`
  color: white;
  /* font-size: 40px;
  margin: 20px 0; */
`;

const InputBox = styled.View`
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 20px;
  /* flex: 1; */
`;

const CharTextBox = styled.TouchableOpacity<{ width: number }>`
  justify-content: center;
  width: ${(props) => props.width - 40}px;
  padding-left: 5px;
  height: 40px;
  border: 5px grey;
  color: white;
  font-size: 20px;
  margin: 20px 20px 0 20px;
  text-decoration: dashed;
`;

const StyledInput = styled.TextInput`
  color: white;
  border: white;
  font-size: 15px;
  margin-right: 20px;
  padding: 5px;
  height: 50px;
  flex: 1;
`;
