import { Image, Modal, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'
import { FONTS, SIZES } from '../../../../constants'
import { ScrollView } from 'react-native-gesture-handler'
import { Marker } from 'react-native-svg'
import { Right, pencil } from '../../../../constants/icons'
import { useTheme } from '../../../Common/Theme/ThemeType'

const ComplitedWorkout = () => {

  const { colors } = useTheme();



  const TimeAndDistance = () => {

    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 20,
        width: SIZES.width,
        flexDirection: 'row',
        // alignItems: "center",
        justifyContent: "space-between",
        alignSelf:"center"
        
      },
      firstBox: {
        alignItems: "center",
        alignSelf: "flex-start",
        flex: 1,
        marginVertical: 10,
      },
      midBox: {
        alignItems: "center",
        alignSelf: "center",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor:'rgba(0,0,0,0.2)',
        flex: 1,
        marginVertical: 10,

      },
      lastbox: {
        alignItems: "center",
        alignSelf: "flex-end",
        flex: 1,
        marginVertical: 10,

      },
      TitleText: {
        ...FONTS.Bebas,
        fontSize: 36,
        color: 'black',

      },
      subText: {
        ...FONTS.body3,
        fontSize: 16,
        color: 'black'
      },


    })
    return (
      <>
        <View style={styles.container}>
          <View style={styles.firstBox}>
            <Text style={styles.TitleText}>53:01</Text>
            <Text style={styles.subText}>Min/mi</Text>
          </View>
          <View style={styles.midBox}>
            <Text style={styles.TitleText}>08:35</Text>
            <Text style={styles.subText}>Duration</Text>
          </View>
          <View style={styles.lastbox}>
            <Text style={styles.TitleText}>1.8</Text>
            <Text style={styles.subText}>Kcal</Text>
          </View>

        </View>
      </>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent barStyle={'dark-content'} />
      <ScrollView style={{}}>
        <MapView
          provider='google'
          style={{
            height: 300,
            width: SIZES.width,
            marginBottom: 10
          }}
          initialRegion={{
            latitude: 21.2141852,
            longitude: 72.8574904,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
        </MapView>
        <View style={{
          width: SIZES.width,
          backgroundColor: colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 18,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          top: -30,

        }}>
          <View style={{ height: 6, width: 30, borderRadius: 15, backgroundColor: 'white', alignSelf: "center", marginBottom: 20 }}></View>


          <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: 20 }}>
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Right}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                  tintColor: colors.primary
                }}
              />
            </View>
            <Text style={{ ...FONTS.body3, fontWeight: '700', marginLeft: 10, flex: 1 }}>Week 4 - Day 3</Text>
            <Pressable style={{
              height: 44, width: 44,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }} >
              <Image source={pencil} style={{
                resizeMode: 'contain',
                height: 15,
                width: 15,
              }} />
            </Pressable>
          </View>


          <View style={{ height: 200, width: '100%', backgroundColor: 'white', borderRadius: 15, marginTop: 30 }}>
            <View style={{
              alignSelf: "center", height: 80, width: 176, backgroundColor: colors.primary, top: -40, borderRadius: 39,
              alignItems: "center"
            }}>
              <Text style={{ ...FONTS.Bebas1, fontSize: 48, fontWeight: "400", color: 'white' }}>03:28</Text>
              <Text style={{ ...FONTS.body3, fontSize: 16, fontWeight: "400", color: 'white' }}>Mile</Text>
            </View>
            <TimeAndDistance />


          </View>
        </View>



      </ScrollView >
    </View >
  )
}

export default ComplitedWorkout

const styles = StyleSheet.create({})