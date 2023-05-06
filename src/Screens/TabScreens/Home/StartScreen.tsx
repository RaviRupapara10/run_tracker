import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../Common/Theme/ThemeType';
import { PlayBtnIcon, Run, Setting, Walk, back_arrow } from '../../../../constants/icons';
import { Avatar } from '@rneui/themed';
import MyBtn from '../../../Common/MyBtn';
import { FONTS, SIZES } from '../../../../constants';
import { Image } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const { colors } = useTheme();

  const navigation = useNavigation()

  const styles = StyleSheet.create({
    CardContainer: {
      height: 121,
      width: 324,
      padding: 20,
      backgroundColor: colors.gray1,
      borderRadius: 15,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.gray2,
      flexDirection: "row",
    },
    iconBackground: {
      height: 64,
      width: 64,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: "center",
      borderRadius: 32,
      // marginRight: 20
    },
    walkaIcon: {
      width: 35, height: 35,
      resizeMode: 'contain',
    },
    cardText: {
      ...FONTS.body1,
      color: colors.darkbackground,
      flex: 1,
      margin: 20
    },
    timeBtn: {
      width: 94,
      height: 45,
      backgroundColor: colors.gray2,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',

    },
    timeText: {
      ...FONTS.Bebas2,
      color: colors.grayText
    }
  })


  const Header = () => {
    const styles = StyleSheet.create({
      header: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        // justifyContent:'center',
      },
    })

    return (
      <>
        <View style={styles.header}>
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Avatar
              size={16}
              source={back_arrow}
              containerStyle={{}}
            />
          </View>
          <Text style={{ flex: 1, ...FONTS.h3, color: colors.darkbackground }}>Week 1 - Day 2</Text>
          <Pressable style={{ marginRight: 20, alignItems: 'center' }}>
            <MyBtn source={Setting} />
          </Pressable>
        </View>
      </>
    )
  }

  const WalkCard = () => {

    return (
      <>
        <View style={{ alignSelf: 'center', marginVertical: 10 }}>
          <View style={styles.CardContainer}>
            <View style={styles.iconBackground}>
              <Image source={Walk} style={styles.walkaIcon} />
            </View>
            <Text style={styles.cardText}>Walk</Text>
            <View style={styles.timeBtn}>
              <Text style={styles.timeText}>14:00</Text>
            </View>
          </View>
        </View>
      </>
    )
  }

  const RunCard = () => {
    return (
      <>
        <View style={{ alignSelf: 'center', marginVertical: 10 }}>
          <View style={styles.CardContainer}>
            <View style={styles.iconBackground}>
              <Image source={Run} style={styles.walkaIcon} />
            </View>
            <Text style={styles.cardText}>Run</Text>
            <View style={styles.timeBtn}>
              <Text style={styles.timeText}>08:00</Text>
            </View>
          </View>
        </View>
      </>
    )
  }
  const PlayBtn = () => {
    const styles = StyleSheet.create({
      circleCOntainer: {
        height: 124,
        width: 124,
        alignSelf: 'center',
        borderRadius: 124 / 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      playIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
      }
    })
    return (
      <>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 1]}
          colors={[`${colors.grade1}`, `${colors.grade2}`]}
          style={styles.circleCOntainer}
        >
          <Image source={PlayBtnIcon} style={styles.playIcon} />
        </LinearGradient>
      </>
    )
  }

  return (
    <>
    <SafeAreaView style={{ width: SIZES.width }}>
      <View style={{ marginTop: 20, }}>
        <Header />
      </View>
      <View style={{ margin: 20 }}>
        <WalkCard />

        <RunCard />
      </View>
      <Pressable
        onPress={() => navigation.navigate('JogRun' as never)}
        style={{ marginTop: 80 }}>
        <PlayBtn />
      </Pressable>

    </SafeAreaView >
    </>
  )
}

export default StartScreen

