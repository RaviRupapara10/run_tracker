import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { backDemo, searchDemo } from '../../../constants/icons'
import { SIZES } from '../../../constants'

const Header = () => {
  return (

    <View style={{
      height: 63, width: SIZES.width, alignItems: "center", flexDirection: 'row', elevation: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

    }}>
      <View style={{ padding: 20 }}>
        <Image source={backDemo} style={{ height: 20, width: 20, tintColor: 'black', resizeMode: "contain" }} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 28, color: "black" }}>PLace holder</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Image source={searchDemo} style={{ height: 24, width: 24, tintColor: '#5D5D5D', resizeMode: "contain" }} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})