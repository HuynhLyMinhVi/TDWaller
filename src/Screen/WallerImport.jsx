import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import ButtonToBack from "../Components/ButtonToBack/ButtonToBack";
import { ExternalShadow, InternalShadow } from "../Components/BoxShadow";
import { useNavigation } from "@react-navigation/native";
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
const ImportConten = styled.View`
  background-color: ${color.__grey};
  height: auto;
  align-items: center;
`;
const TextImport = styled.Text`
  color: ${color.__bluetext};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;
const ButtonImportMP = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonMnemonic = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  background-color: ${color.__grey};
`;
const ButtonPrivateKey = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  background-color: ${color.__grey};
  height: 50px;
`;

const TextButtonMP = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${color.__blacktext};
`;

const RecoveryPhrase = styled.View`
  width: 100%;
  margin-top: 35px;
`;
const RecoveryPhraseText = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const PhraseText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
const PhraseInput = styled.View`
  height: 50px;
  margin-top: 15px;
`;
const ButtonImport = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  margin-top: 30px;
`;
const StyleButtonImport = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
const StyleButtonImportText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${color.__blacktext};
`;
// ======================= END =========================
const WallerImport = () => {
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
      {/* Import Conten */}
      <ExternalShadow>
        <ImportConten>
          <TextImport>Import</TextImport>
          {/* Button Private Key and Mnemonic  */}
          <ButtonImportMP>
            {/* Mnemonic  */}
            <ButtonMnemonic>
              <ExternalShadow>
                <View
                  style={{
                    width: 130,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextButtonMP>Mnemonic</TextButtonMP>
                </View>
              </ExternalShadow>
            </ButtonMnemonic>
            {/* Private Key */}
            <ButtonPrivateKey>
              <InternalShadow>
                <View
                  style={{
                    width: 130,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextButtonMP>Private Key</TextButtonMP>
                </View>
              </InternalShadow>
            </ButtonPrivateKey>
          </ButtonImportMP>
          {/* Secret Recovery Phrase */}
          <RecoveryPhrase>
            {/* Text */}
            <RecoveryPhraseText>
              <PhraseText>Secret Recovery Phrase</PhraseText>
              <TouchableOpacity>
                <PhraseText>Show</PhraseText>
              </TouchableOpacity>
            </RecoveryPhraseText>
            {/* Input */}
            <PhraseInput>
              <InternalShadow>
                <TextInput
                  placeholder="Hello"
                  style={{ paddingHorizontal: 10 }}
                />
              </InternalShadow>
            </PhraseInput>
          </RecoveryPhrase>
          {/* Secret Recovery Phrase */}
          <RecoveryPhrase>
            {/* Text */}
            <RecoveryPhraseText>
              <PhraseText>Secret Recovery Phrase</PhraseText>
              <TouchableOpacity>
                <PhraseText>Show</PhraseText>
              </TouchableOpacity>
            </RecoveryPhraseText>
            {/* Input */}
            <PhraseInput>
              <InternalShadow>
                <TextInput
                  placeholder="Hello"
                  style={{ paddingHorizontal: 10 }}
                />
              </InternalShadow>
            </PhraseInput>
          </RecoveryPhrase>
          {/* Comfirm Password */}
          <RecoveryPhrase>
            {/* Text */}
            <RecoveryPhraseText>
              <PhraseText>Comfirm Password</PhraseText>
            </RecoveryPhraseText>
            {/* Input */}
            <PhraseInput>
              <InternalShadow>
                <TextInput
                  placeholder="Hello"
                  style={{ paddingHorizontal: 10 }}
                />
              </InternalShadow>
            </PhraseInput>
            <PhraseText style={{ marginVertical: 15 }}>
              Must be at least 12 characters
            </PhraseText>
          </RecoveryPhrase>
        </ImportConten>
      </ExternalShadow>
      {/* Button Import */}
      <ButtonImport
        onPress={() => {
          navigation.navigate("BottomNavigation");
        }}
      >
        <ExternalShadow>
          <StyleButtonImport>
            <StyleButtonImportText>Import</StyleButtonImportText>
          </StyleButtonImport>
        </ExternalShadow>
      </ButtonImport>
    </StyleSafeAreaView>
  );
};

export default WallerImport;
