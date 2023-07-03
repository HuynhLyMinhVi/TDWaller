import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "styled-components";
import LoginCarousel from "../Components/LoginCarousel/LoginCarousel";
import { ExternalShadow } from "../Components/BoxShadow";
import { color } from "../assets/styles/common";
import { useNavigation } from "@react-navigation/native";

//=================== Styled Components ==================
const StyleSafeAreaView = styled.SafeAreaView`
  align-items: center;
`;
const ButtonWaller = styled.View`
  margin-top: 60px;
  align-items: center;
  gap: 29;
`;
const ButtonNewWaller = styled.View`
  background-color: ${color.__grey};
  width: 340px;
  height: 30px;
  align-items: center;
  padding: 5px;
`;
const TextNewWaller = styled.Text`
  color: ${color.__blacktext};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const ButtonHaveWaller = styled.View``;
// ======================= END =========================
const Login = () => {
  const navigation = useNavigation();
  const handleHaveWalletPress = () => {
    navigation.navigate("WallerImport");
  };
  return (
    <StyleSafeAreaView>
      {/* Carosel */}
      <LoginCarousel />
      {/* Button */}
      <ButtonWaller>
        <TouchableOpacity>
          <ExternalShadow>
            <ButtonNewWaller>
              <TextNewWaller>Create a new wallet</TextNewWaller>
            </ButtonNewWaller>
          </ExternalShadow>
        </TouchableOpacity>
        {/* ---------------------------------- */}
        <TouchableOpacity onPress={handleHaveWalletPress}>
          <ButtonHaveWaller>
            <TextNewWaller>I have wallet</TextNewWaller>
          </ButtonHaveWaller>
        </TouchableOpacity>
      </ButtonWaller>
    </StyleSafeAreaView>
  );
};

export default Login;
