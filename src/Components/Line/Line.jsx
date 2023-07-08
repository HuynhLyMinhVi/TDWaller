import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'styled-components';
import { color } from '../../assets/styles/common';


const Lines = styled.View`
  width: 100%;
  background-color: ${color.__colorLine};
  height: 2px;
`;
const Line = () => {
  return (
    <Lines
      style={[
        {
          marginTop: 10,
          opacity: 0.6,
        },
      ]}
    />
  );
}

export default Line