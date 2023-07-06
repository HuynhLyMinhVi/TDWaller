import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import ButtonToBack from "../Components/ButtonToBack/ButtonToBack";
import { useNavigation } from "@react-navigation/native";
import { ExternalShadow, InternalShadow } from "../Components/BoxShadow";
import { color } from "../assets/styles/common";
import images from "../assets/images";
import { ethers, wordlists } from "ethers";

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
const RandomText = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 0 5px;
`;
const ButtonCopy = styled.TouchableOpacity``;
const ButtonCopyText = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 30px;
`;
const Warning = styled.View`
  align-items: center;
  margin-top: 100px;
`;
const WarningImage = styled.Image`
  width: 50px;
  height: 40px;
`;
const WarningText = styled.Text`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20;
  color: ${color.__bluetext};
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
const RecoverWaller = () => {
  const navigation = useNavigation();
  const hendelToBack = () => {
    navigation.goBack();
  };
  // const generatePhrase = () => {
  //   const wallet = ethers.Wallet.createRandom();
  //   console.log("wallet", wallet);
  //   console.log("fffff");
  // };
  // generatePhrase();
  // console.log("generatePhrase", generatePhrase());
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
          <InternalShadow
            style={{
              height: 30,
              width: "auto",
              backgroundColor: `${color.__grey}`,
            }}
          >
            <RandomText>hell</RandomText>
          </InternalShadow>
        </RandomPhrase>

        {/* Button Copy */}
        <ButtonCopy>
          <ButtonCopyText>Copy</ButtonCopyText>
        </ButtonCopy>
        {/* Icon Warning */}
        <Warning>
          <WarningImage source={images.iconWarning} />
          <WarningText>
            Never share recovery phrases with anyone, keep them safe and
            confidential!
          </WarningText>
        </Warning>
        {/* Button Next */}
        <ButtonNext>
          <ExternalShadow>
            <Pressable
              onPress={() => {
                navigation.navigate("RecoverWaller1");
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

export default RecoverWaller;
