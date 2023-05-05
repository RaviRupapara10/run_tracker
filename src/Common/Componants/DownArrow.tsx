import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DownArrowIcon } from '../../../constants/icons'

const DownArrow = () => {
  return (
    <View style={{alignItems:'center',margin:5}}>
      <Image source={DownArrowIcon} style={{ height: 10, width: 12,marginTop:5 }} />
    </View>
  )
}

export default DownArrow

const styles = StyleSheet.create({})