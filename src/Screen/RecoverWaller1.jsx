import { View, Text, TouchableOpacity, Pressable } from "react-native";
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
  margin: 40px 21px 0;
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

const ButtonNext = styled.View`
  margin-top: 50px;
  width: 370px;
`;
const ButtonNextText = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
// ======================= END =========================
const RecoverWaller1 = () => {
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
      <Container>
        <TextH1>Phrase recover your wallet</TextH1>
        <TextP>
          Tap the words to put them side by side in the correct order.
        </TextP>
        
        {/* Button Next */}
        <ButtonNext>
          <ExternalShadow>
            <Pressable
              onPress={() => {
                navigation.navigate("BottomNavigation");
              }}
            >
              <ButtonNextText>Next</ButtonNextText>
            </Pressable>
          </ExternalShadow>
        </ButtonNext>
      </Container>
    </StyleSafeAreaView>
  );
};

export default RecoverWaller1;
