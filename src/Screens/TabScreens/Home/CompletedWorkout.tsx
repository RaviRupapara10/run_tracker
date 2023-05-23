import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomScreen from '../../../Common/Componants/BottomScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../../../../constants'

const CompletedWorkout = () => {
  return (
    <View>
      <Text>CompletedWorkout</Text>
      <SafeAreaView style={{ height: SIZES.height }}>
      </SafeAreaView>

    </View>
  )
}

export default CompletedWorkout

const styles = StyleSheet.create({})