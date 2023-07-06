import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { ExternalShadow } from "../../Components/BoxShadow";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";

//=================== Styled Components ==================
const StyleSafeAreaView = styled.SafeAreaView`
  margin: 0 12px;
`;
const Hearder = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ContaiHear = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const ImageLogo = styled.Image`
  width: 30px;
  height: 30px;
`;
const Information = styled.View`
  margin-left: 10px;
`;
const InformationText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: ${color.__blacktext};
`;
const InformationTexxt = styled.Text`
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  color: ${color.__bluetext};
`;
const NotificationImage = styled.Image`
  width: 20px;
  height: 20px;
`;
const CaroselHome = styled.View`
  width: auto;
  height: 190px;
`;
const Button = styled.View``;
// ======================= END =========================
export default function HomeScreen({ navigation }) {
  return (
    <StyleSafeAreaView>
      <Hearder>
        <ContaiHear>
          {/* Logo */}
          <ExternalShadow>
            <ImageLogo source={images.iconWallert} />
          </ExternalShadow>
          {/* Wallet information */}
          <Information>
            <InformationText>0x430...d628</InformationText>
            <InformationTexxt>1182.00$</InformationTexxt>
          </Information>
        </ContaiHear>
        {/* Notification */}
        <ExternalShadow>
          <NotificationImage source={images.iconNotification} />
        </ExternalShadow>
      </Hearder>
      {/* Carosel Home */}
      <View style={{ marginTop: 30 }}></View>
      <ExternalShadow>
        <CaroselHome>
          <HomeCarousel />
        </CaroselHome>
      </ExternalShadow>
      {/* Button Send Receive Buy */}
      <Button>
        
      </Button>
    </StyleSafeAreaView>
  );
}
