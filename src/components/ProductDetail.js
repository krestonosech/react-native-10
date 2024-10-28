import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../../constants';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 200 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 20, color: COLORS.primary }}>{product.price}</Text>
    </View>
  );
};

export default ProductDetail;