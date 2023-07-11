import React, { useState } from "react";
import { styled } from "styled-components";

import { Dimensions, Image, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";

// =========== Styled Components =============

const CarouselView = styled.View`
  align-items: center;
`;
const StyleImage = styled.Image`
  margin-top: 100px;
`;
const StyleCarouselText = styled.Text`
  color: ${color.__bluetext};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 15px;
`;
const StyleTextCarousel = styled.Text`
  color: ${color.__blacktext};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
// ===========================================
const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const data = [
  {
    title: "All assets in one place",
    body: "View and store your assets easily.",
    imgUrl: `${images.LoginImage}`,
  },
  {
    title: "All assets in one place",
    body: "View and store your assets easily.",
    imgUrl: `${images.LoginImage}`,
  },
  {
    title: "All assets in one place",
    body: "View and store your assets easily.",
    imgUrl: `${images.LoginImage}`,
  },
];

const LoginCarousel = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const renderItem = ({ item }) => {
    return (
      <CarouselView>
        <StyleImage source={item.imgUrl} />
        <StyleCarouselText>{item.title}</StyleCarouselText>
        <StyleTextCarousel>{item.body}</StyleTextCarousel>
      </CarouselView>
    );
  };
  return (
    <>
      <Carousel
        loop
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        ref={isCarousel}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </>
  );
};

export default LoginCarousel;
