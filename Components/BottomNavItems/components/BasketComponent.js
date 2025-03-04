import React from 'react';
import { View, Text } from 'react-native';

const BasketComponent = () => {
  const { basketContainerStyle, bagsTextStyle, priceTextStyle } = styles;
  return (
    <View style={basketContainerStyle}>
      <Text style={bagsTextStyle}>Current Bucket</Text>
      <Text style={priceTextStyle}>Sumedha Hardware</Text>
    </View>
  );
};

const styles = {
  basketContainerStyle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#DCDCDC'
  },
  bagsTextStyle: {
    fontSize: 12
  },
  priceTextStyle: {
    fontSize: 12,
  },
};

export default BasketComponent;

