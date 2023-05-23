import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../../Common/Theme/ThemeType';
import { FONTS, SIZES } from '../../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { girl, girlFitness } from '../../../../constants/images';

const QuitScreen = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    backGround: {
      opacity: 0.9,
      flex: 1,
    },
    container: {
      width: SIZES.width,
      height: '100%',
      padding: 30,
      alignItems: "center"
    },
    fistText: {
      ...FONTS.Bebas1,
      color: "white",
      fontSize: 32,
      marginTop: 280,
    },
    secondText: {
      ...FONTS.body3,
      color: "white",
      fontSize: 16,
    },
    QuitBtn: {
      height: 60,
      width: 260,
      borderRadius: 30,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: 240,

    },
    btnText: {
      ...FONTS.h3,
      color: colors.primary,
      fontSize: 18,
    },
    cancleText: {
      ...FONTS.h3,
      color: "white",
      fontSize: 18,
      margin: 10
    }
  })

  return (
    <View style={{ flex: 1 }}>


      <ImageBackground source={girlFitness} style={{ height: SIZES.height + 50, width: SIZES.width, }}>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 1]}
          colors={[`${colors.grade1}`, `${colors.grade2}`]}
          style={styles.backGround}
        >
          <SafeAreaView style={styles.container} >
            <Text style={styles.fistText}>Quit workout?</Text>
            <Text style={styles.secondText}>If you get tired, take a break, but DON’T
              QUIT!</Text>
            <Pressable style={styles.QuitBtn} onPress={() => console.log('you pressed Quit')}>
              <Text style={styles.btnText}>QUIT</Text>
            </Pressable>
            <Text style={styles.cancleText}   onPress={() => console.log('you pressed Cancel')}>CANCEL</Text>

          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default QuitScreen

const styles = StyleSheet.create({})