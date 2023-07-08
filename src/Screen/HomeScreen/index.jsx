import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { ExternalShadow, InternalShadow } from "../../Components/BoxShadow";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import Line from "../../Components/Line/Line";
import ListCurrencys from "../../Components/ListCurrencys/ListCurrencys";

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
const Button = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const ButtonClick = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })``;
const ButtonSend = styled.Pressable`
  width: 90px;
  height: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ButtonImage = styled.Image`
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${color.__blacktext};
`;
const ButtonArranges = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ButtonAZ = styled.Pressable`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ButtonAZImage = styled.Image``;
const ButtonAZText = styled.Text``;
const ButtonTransfer = styled.Pressable``;
const ButtonTransferImage = styled.Image``;
const ListCurrency = styled.View``;
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
        {/* Send */}
        <ButtonClick>
          <ExternalShadow>
            <ButtonSend>
              <ButtonImage source={images.iconSend} />
              <ButtonText>Send</ButtonText>
            </ButtonSend>
          </ExternalShadow>
        </ButtonClick>
        {/* Receive */}
        <ButtonClick>
          <ExternalShadow>
            <ButtonSend>
              <ButtonImage source={images.iconReceive} />
              <ButtonText>Receive</ButtonText>
            </ButtonSend>
          </ExternalShadow>
        </ButtonClick>
        {/* Buy */}
        <ButtonClick>
          <ExternalShadow>
            <ButtonSend>
              <ButtonImage source={images.iconBuy} />
              <ButtonText>Buy</ButtonText>
            </ButtonSend>
          </ExternalShadow>
        </ButtonClick>
      </Button>
      <Line />
      {/* Button A - Z and Transfer*/}
      <ButtonArranges>
        {/* Button A - Z */}
        <TouchableOpacity style={{ width: 80, height: 40 }}>
          <ExternalShadow>
            <ButtonAZ>
              <ButtonAZImage source={images.iconAZ} />
              <ButtonAZText>A - Z</ButtonAZText>
            </ButtonAZ>
          </ExternalShadow>
        </TouchableOpacity>
        {/* Transfer */}
        <TouchableOpacity>
          <ExternalShadow>
            <ButtonTransfer>
              <ButtonTransferImage source={images.iconTransfer} />
            </ButtonTransfer>
          </ExternalShadow>
        </TouchableOpacity>
      </ButtonArranges>
      {/* Virtual Currency List */}
      <ListCurrency>
        <ListCurrencys/>
      </ListCurrency>
    </StyleSafeAreaView>
  );
}
