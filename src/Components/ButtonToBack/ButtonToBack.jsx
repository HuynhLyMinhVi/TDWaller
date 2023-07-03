import React from "react";
import { styled } from "styled-components";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";

//=================== Styled Components ==================
const StyleView = styled.View`
  background-color: ${color.__grey};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 25px;
`;
const StyleImages = styled.Image`
  width: 18px;
  height: 15px;
`;
// ======================= END =========================
const ButtonToBack = () => {
  return (
    <StyleView>
      <StyleImages source={images.iconToBack} />
    </StyleView>
  );
};

export default ButtonToBack;
