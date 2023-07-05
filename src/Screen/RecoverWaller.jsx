import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import ButtonToBack from "../Components/ButtonToBack/ButtonToBack";
import { useNavigation } from "@react-navigation/native";
import { ExternalShadow } from "../Components/BoxShadow";
import { color } from "../assets/styles/common";

//=================== Styled Components ==================
const StyleSafeAreaView = styled.SafeAreaView`
  margin: 0 12px;
`;
const HearderButtonBack = styled.View`
  width: 50px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const Container = styled.View`
  margin: 45px 21px 0;
  align-items: center;
`;
const TextH1 = styled.Text`
  line-height: 30px;
  font-weight: 500;
  font-size: 24px;
  color: ${color.__bluetext};
`;
const TextP = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const RandomPhrase = styled.View`
  margin-top: 35px;
`;
const ButtonCopy = styled.TouchableOpacity``;
const ButtonCopyText = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 30px;
`;

// ======================= END =========================
const RecoverWaller = () => {
  const navigation = useNavigation();
  const hendelToBack = () => {
    navigation.goBack();
  };
  return (
    <StyleSafeAreaView>
      {/* Button To Back */}
      <HearderButtonBack>
        <TouchableOpacity onPress={hendelToBack}>
          <ExternalShadow>
            <ButtonToBack />
          </ExternalShadow>
        </TouchableOpacity>
      </HearderButtonBack>
      {/* Phrase recover your wallet. */}
      <Container>
        <TextH1>Phrase recover your wallet</TextH1>
        <TextP>
          Write down or copy these words in the correct order and save them in a
          safe place.
        </TextP>
        {/* Random phrase */}
        <RandomPhrase>
          <Text>hello</Text>
        </RandomPhrase>
        {/* Button Copy */}
        <ButtonCopy>
          <ButtonCopyText>Copy</ButtonCopyText>
        </ButtonCopy>
        
      </Container>
    </StyleSafeAreaView>
  );
};

export default RecoverWaller;
