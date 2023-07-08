import React from "react";
import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styled } from "styled-components/native";
import { ExternalShadow, InternalShadow } from "../BoxShadow";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";
import Charts from "../Charts/Charts";

//=================== Styled Components ==================
const StyleSafeAreaView = styled.SafeAreaView`
  margin: 15px auto auto;
`;
const Conten = styled.View`
  width: 330px;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
`;
const LogoCurrencys = styled.Image``;
const NameCuMo = styled.View``;
const NameCu = styled.Text`
  font-weight: 800;
  font-size: 14px;
  line-height: 25px;
  color: ${color.__blacktext};
`;
const MoneyName = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${color.__blueluminous};
`;
const Vacusumva = styled.View``;
const SumValueMoney = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${color.__matteblack};
`;
const ChartCustum = styled.View`
  width: 90px;
  height: 50px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;
// ======================= END =========================
const ListCurrencys = () => {
  return (
    <StyleSafeAreaView>
      {/* Virtual Currency List*/}
      <Pressable>
        <ExternalShadow>
          <Conten>
            <Information>
              {/* Logo Currencys */}
              <InternalShadow style={{ width: 40, height: 40 }}>
                <View style={{ alignItems: "center" }}>
                  <LogoCurrencys source={images.iconEther} />
                </View>
              </InternalShadow>
              {/* Name Currencys and money */}
              <NameCuMo>
                <NameCu>ETH</NameCu>
                <MoneyName>$ 594.96</MoneyName>
              </NameCuMo>
              {/* Value Currencys and sum value money */}
              <Vacusumva>
                <NameCu>3 ETH</NameCu>
                <SumValueMoney>$ 1785.1</SumValueMoney>
              </Vacusumva>
            </Information>
            {/* Chart */}
            <ChartCustum>
              <Charts />
            </ChartCustum>
          </Conten>
        </ExternalShadow>
      </Pressable>
    </StyleSafeAreaView>
  );
};

export default ListCurrencys;
