import React from 'react'
import { Image, Linking, TouchableHighlight, View } from 'react-native'

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL('https://google.com')}
        >
          <Image
            source={{
              uri: 'https://73online.ru/pic/upld_63851.jpg',
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
          }}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
    </View>
  )
}

export default Header
