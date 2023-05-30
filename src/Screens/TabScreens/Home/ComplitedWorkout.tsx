import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'
import { SIZES } from '../../../../constants'
import { ScrollView } from 'react-native-gesture-handler'

const ComplitedWorkout = () => {
  return (
    <View>
      <StatusBar translucent barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <MapView
            style={{ height: 300, width: SIZES.width }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <SafeAreaView >
          <Text>ComplitedWorkout</Text>

        </SafeAreaView >
      </ScrollView>
    </View>
  )
}

export default ComplitedWorkout

const styles = StyleSheet.create({})