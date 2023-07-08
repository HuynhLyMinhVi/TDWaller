import React from "react";
import { Text } from "react-native";
import { styled } from "styled-components/native";
import { LineChart } from "react-native-gifted-charts";
//=================== Styled Components ==================
const StyleSafeAreaView = styled.View`
    width: 70px;
    height: 70px;
`;

// ======================= END =========================
const Charts = () => {
  const lineData = [
    { value: 0 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    // { value: 60 },
    // { value: 54 },
    // { value: 85 },
  ];
  return (
    //   <LineChart
    //     areaChart
    //     hideDataPoints
    //     isAnimated
    //     animationDuration={1200}
    //     startFillColor="#0BA5A4"
    //     startOpacity={1}
    //     endOpacity={0.3}
    //     initialSpacing={0}
    //     data={lineData}
    //     spacing={30}
    //     thickness={2}
    //     hideRules
    //     hideYAxisText
    //     yAxisColor="#0BA5A4"
    //     // showVerticalLines
    //     verticalLinesColor="rgba(14,164,164,0.5)"
    //     xAxisColor="#0BA5A4"
    //     color="#0BA5A4"
    //   />
      <Text>Chart</Text>
  );
};

export default Charts;
