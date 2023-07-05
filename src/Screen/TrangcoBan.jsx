import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import ButtonToBack from "../Components/ButtonToBack/ButtonToBack";
import { useNavigation } from "@react-navigation/native";
import { ExternalShadow } from "../Components/BoxShadow";

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
// ======================= END =========================
const BackupWallerm = () => {
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
    </StyleSafeAreaView>
  );
};

export default BackupWallerm;
