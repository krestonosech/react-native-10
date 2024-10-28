import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { GestureHandlerRootView, PinchGestureHandler, LongPressGestureHandler, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GestureIcon = ({ iconName, onLongPress, onPanGesture, onPinch }) => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const scale = useSharedValue(1);

  const panStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={(event) => {
      translationX.value = event.translationX;
      translationY.value = event.translationY;
      if (onPanGesture) onPanGesture(event);
    }}>
      <PinchGestureHandler onPinchEvent={(event) => {
        scale.value = event.scale;
        if (onPinch) onPinch(event);
      }}>
        <LongPressGestureHandler onActivated={onLongPress}>
          <Animated.View style={[styles.iconContainer, panStyle]}>
            <Icon name={iconName} size={60} color="#000" />
          </Animated.View>
        </LongPressGestureHandler>
      </PinchGestureHandler>
    </PanGestureHandler>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.iconColumn}>
        <GestureIcon 
          iconName="home" 
          onLongPress={() => Alert.alert("Вы нажали на дом!")} 
          onPanGesture={() => Alert.alert("Перетаскивание дома!")} 
          onPinch={() => Alert.alert("Сжатие дома!")}
        />
        <GestureIcon 
          iconName="account" 
          onLongPress={() => Alert.alert("Вы нажали на аккаунт!")} 
          onPanGesture={() => Alert.alert("Перетаскивание аккаунта!")} 
          onPinch={() => Alert.alert("Сжатие аккаунта!")}
        />
        <GestureIcon 
          iconName="settings" 
          onLongPress={() => Alert.alert("Вы нажали на настройки!")} 
          onPanGesture={() => Alert.alert("Перетаскивание настроек!")} 
          onPinch={() => Alert.alert("Сжатие настроек!")}
        />
        <GestureIcon 
          iconName="bell" 
          onLongPress={() => Alert.alert("Вы нажали на колокол!")} 
          onPanGesture={() => Alert.alert("Перетаскивание колокола!")} 
          onPinch={() => Alert.alert("Сжатие колокола!")}
        />
        <GestureIcon 
          iconName="star" 
          onLongPress={() => Alert.alert("Вы нажали на звезду!")} 
          onPanGesture={() => Alert.alert("Перетаскивание звезды!")} 
          onPinch={() => Alert.alert("Сжатие звезды!")}
        />
        <GestureIcon 
          iconName="heart" 
          onLongPress={() => Alert.alert("Вы нажали на сердце!")} 
          onPanGesture={() => Alert.alert("Перетаскивание сердца!")} 
          onPinch={() => Alert.alert("Сжатие сердца!")}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  iconColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
});