import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedLottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Common/Theme/ThemeType';
import { SIZES } from '../../../../constants';
import Tracking from '../../../Common/Componants/Tracking';

const JogRun = () => {
  const { colors } = useTheme();

  const animation = useRef(null);

  const [SowAnimation, setSowAnimation] = useState(true)

  const CountDownAnimation = () => {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: SIZES.width,
        alignItems: 'center',
        justifyContent: "center",
      }
    })


    return (
      <>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} barStyle={'light-content'} />

        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 1]}
          colors={[`${colors.grade1}`, `${colors.grade2}`]}
          style={styles.container}
        >
          <AnimatedLottieView
            ref={animation}
            source={require('../../../Lottee/CountDown.json')}
            autoPlay
            loop={false}
            style={{
              width: 400,
              height: 400,
              marginTop: 100,
            }}
            onAnimationFinish={() => setSowAnimation(false)}
          />
        </LinearGradient>

      </>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {SowAnimation ? <CountDownAnimation />
        :
        <>
          <View style={{ height: '100%', width: SIZES.width, flex: 1 }}>
          <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} barStyle={'light-content'} />
            <Tracking />
          </View>
        </>}

    </View>
  )
}

export default JogRun
