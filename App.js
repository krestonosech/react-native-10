import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './constants';
import Categories from './src/components/categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';
import ProductDetail from './src/components/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => (
  <View style={{ padding: 24, paddingTop: 55, paddingBottom: 75, backgroundColor: COLORS.green }}>
    <Header />
    <Categories />
    <Popular />
  </View>
);