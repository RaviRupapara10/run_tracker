import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './Componants/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../../constants'
import Card from './Componants/Card'

const DemoScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <View style={{ width: SIZES.width }}>
          <Header />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </SafeAreaView>
  )
}
export default DemoScreen
const styles = StyleSheet.create({})