import { Image, Pressable, ProgressBarAndroidBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../Theme/ThemeType'
import MyBtn from '../MyBtn'
import { Setting, nextIcon, previousIcon, signal } from '../../../constants/icons'
import { FONTS, SIZES } from '../../../constants'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const Tracking = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    backgroundColor: {
      flex: 1,
      height: '100%',
      width: '100%',
    }
  })

  const TimeLet = () => {
    return (
      <>
        <View style={{
          flexDirection: 'row', width: SIZES.width, padding: 20,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={signal} style={{ height: 20, width: 20 }} />
            <Text style={{ marginLeft: 5, ...FONTS.body3, color: 'rgba(255, 255, 255, 0.8)' }}>GPS</Text>
          </View >
          <View style={{}}>
            <Text style={{ ...FONTS.body3, color: 'rgba(255, 255, 255, 0.4)' }}>Time Left - 26:69</Text>
          </View>
          <View >
            <View style={{ padding: 10, borderRadius: 15, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Image source={Setting} style={{ height: 20, width: 20, tintColor: 'white' }} />
            </View>
          </View>
        </View>
      </>
    )
  }
  const ProgrressBAr = () => {

    return (
      <>
        <View style={{
          flexDirection: 'row', width: SIZES.width, padding: 20,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Pressable style={{ height: 40, width: 40 }}>
            <Image source={previousIcon} style={{ height: 20, width: 20 }} />
          </Pressable>
          <View>
            <CircularProgressBase
              value={60}
              radius={120}
              duration={2000}
              maxValue={100}
              activeStrokeColor='white'
              inActiveStrokeOpacity={0.2}
              inActiveStrokeColor='white'
              activeStrokeWidth={15}
              inActiveStrokeWidth={8}
            >
              <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.Bebas, fontSize: 28, color: 'white' }}>Walk</Text>
                <Text style={{ ...FONTS.Bebas, fontSize: 56, margin: 20, color: 'white' }}>00:48</Text>
                <Text style={{ ...FONTS.Bebas, fontSize: 22, color: 'rgba(255, 255, 255, 0.5)' }}>1/15</Text>
              </View>
            </CircularProgressBase>
          </View>
          <Pressable style={{ height: 40, width: 40 }}>
            <Image source={nextIcon} style={{ height: 20, width: 20 }} />
          </Pressable>
        </View>
      </>
    )
  }

  const TimeAndDistance = () => {

    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 20,
        width: SIZES.width,
        // backgroundColor: 'green',
        flexDirection: 'row',
        // alignItems: "center",
        justifyContent: "space-between"
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
        borderColor: 'rgba(255, 255, 255, 0.4)',
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
        color: 'white',

      },
      subText: {
        ...FONTS.body3,
        fontSize: 16,
        color: 'white'
      },


    })
    return (
      <>
        <View style={styles.container}>
          <View style={styles.firstBox}>
            <Text style={styles.TitleText}>00:00</Text>
            <Text style={styles.subText}>Mile</Text>
          </View>
          <View style={styles.midBox}>
            <Text style={styles.TitleText}>08:35</Text>
            <Text style={styles.subText}>Min/mi</Text>
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
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0., 1]}
        // colors={[`${colors.secondGrade1}`, `${colors.secondGrade2}`]}
        colors={[`${colors.firstGrade1}`, `${colors.firstGrade2}`]}
        style={styles.backgroundColor}
      >
        <SafeAreaView>
          <View style={{ height: 20 }}>
            {/* <circularProgressBar/> */}
          </View>
          <TimeLet />
          <ProgrressBAr />
          <TimeAndDistance />
        </SafeAreaView>
      </LinearGradient >
    </>
  )
}

export default Tracking

const styles = StyleSheet.create({})