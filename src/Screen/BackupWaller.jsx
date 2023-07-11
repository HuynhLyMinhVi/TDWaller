import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { styled } from "styled-components/native";
import ButtonToBack from "../Components/ButtonToBack/ButtonToBack";
import { useNavigation } from "@react-navigation/native";
import { ExternalShadow } from "../Components/BoxShadow";
import { color } from "../assets/styles/common";
import images from "../assets/images";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
const Conten = styled.View`
  align-items: center;
`;
const ContentTextH1 = styled.Text`
  color: ${color.__bluetext};
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  width: 250px;
  text-align: center;
`;
const ContentTextP = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  width: 250px;
  text-align: center;
  margin-top: 9px;
`;
const ContenViewImage = styled.View`
  margin-top: 50px;
`;
const ContenImage = styled.Image``;
const ContentCheck = styled.Pressable`
  margin-top: 60px;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;
const ContentCheckBox = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  width: 40px;
  height: 40px;
`;
const ContentCheckText = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  width: 90%;
`;
const ButtonNext = styled.Pressable`
  margin-top: 40px;
`;
const ButtonNextText = styled.View`
  align-items: center;
`;
const TextButton = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
// ======================= END =========================
const BackupWaller = () => {
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();
  const hendelToBack = () => {
    navigation.goBack();
  };
  const hendelRecoverWaller = ()=>{
    navigation.navigate("RecoverWaller");
  }
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
      {/* Conten Text */}
      <Conten>
        <ContentTextH1>Backup your wallet right now!</ContentTextH1>
        <ContentTextP>
          In the next step, you will see 12 words allowing you to recover your
          wallet.
        </ContentTextP>
        <ContenViewImage>
          <ContenImage source={images.BackupImage} />
        </ContenViewImage>
        <ContentCheck>
          <ContentCheckBox>
            <ExternalShadow>
              <BouncyCheckbox
                style={{
                  width: 20,
                  height: 20,
                }}
                iconStyle={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  resizeMode: "cover",
                  alignItems: "center",
                }}
                innerIconStyle={{
                  borderRadius: 0,
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                checkIconImageSource={images.iconCheck}
                fillColor="#e6e7ee"
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </ExternalShadow>
          </ContentCheckBox>
          <ContentCheckText>
            I understand that if I lose the recovery phrase, I won't be able to
            access my wallet.
          </ContentCheckText>
        </ContentCheck>
      </Conten>
      {/* Button Text Next */}
      <ButtonNext onPress={hendelRecoverWaller}>
        <ExternalShadow>
          <ButtonNextText
            disabled={checked ? false : true}
            style={{
              opacity: checked ? 1 : 0.5,
            }}
          >
            <TextButton>Next</TextButton>
          </ButtonNextText>
        </ExternalShadow>
      </ButtonNext>
    </StyleSafeAreaView>
  );
};

export default BackupWaller;
