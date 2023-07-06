import React from 'react'
import { Dimensions, Image, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import images from "../../assets/images";
import { color } from "../../assets/styles/common";
import { styled } from 'styled-components';


// =========== Styled Components =============

const CarouselView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-right: 200px;
  margin-left: -30px;
`;
const StyleImage = styled.Image`
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
    title: "DeFi Solutions",
    // body: "View and store your assets easily.",
    imgUrl: `${images.HomeImage}`,
  },
  {
    title: "DeFi Solutions",
    // body: "View and store your assets easily.",
    imgUrl: `${images.HomeImage}`,
  },
  {
    title: "DeFi Solutions",
    // body: "View and store your assets easily.",
    imgUrl: `${images.HomeImage}`,
  },
];
const HomeCarousel = () => {
    const renderItem = ({ item }) => {
      return (
        <CarouselView>
          <StyleCarouselText>{item.title}</StyleCarouselText>
          <StyleImage source={item.imgUrl} />
          {/* <StyleTextCarousel>{item.body}</StyleTextCarousel> */}
        </CarouselView>
      );
    };
  return (
    <Carousel
      loop
      autoplay
      data={data}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      useScrollView={true}
    />
  );
}

export default HomeCarousel