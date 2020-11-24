import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { HomeScreenNavigationProp } from "./types";
import ColoredButton from "../components/ColoredButton";
import {
  Button,
  Modal,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
} from "react-native";

import useDimensions from "../../utils/useDimensions";

export const AboutModal = (props: {
  visible?: boolean;
  toggle: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}) => {
  return (
    <Modal visible={props.visible} animationType="fade">
      <CenteredModal>
        <Text>A TypeScript React Native App by PretoriaS</Text>
        <Button title="Close" onPress={props.toggle} />
      </CenteredModal>
    </Modal>
  );
};

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const goToProfilePage = () => {
    navigation.navigate("Profile");
  };

  const { screenWidth } = useDimensions();
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleShowModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <MainView>
      <AboutModal visible={showModal} toggle={toggleShowModal} />
      <MainText>ToDo App</MainText>
      <StatusBar style="auto" />
      <ButtonContainer>
        <ColoredButton
          textColor="blue"
          backgroundColor="red"
          onPress={goToProfilePage}
          width={screenWidth}
          height="100"
          extraStyles={`
            margin-bottom: 20px;
          `}
        >
          Go to list
        </ColoredButton>
        <ColoredButton
          textColor="blue"
          backgroundColor="red"
          onPress={toggleShowModal}
          width={screenWidth}
          height={100}
          // extraStyles={`
          //   border: white;
          //   border-width: 5px;
          // `}
        >
          About
        </ColoredButton>
      </ButtonContainer>
    </MainView>
  );
}

export default HomeScreen;

const CenteredModal = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MainView = styled.View`
  flex: 1;
  background-color: blue;
  align-items: center;
`;

const ButtonContainer = styled.View`
  /* justify-content: space-between; */
  /* flex: 1; */
`;

const MainText = styled.Text`
  color: red;
  font-size: 40px;
  /* height: 200px; */
  margin: 20px;
  text-decoration: underline red;
`;
