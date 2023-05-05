
import { Image, ProgressBarAndroidBase, SafeAreaView, ScrollView, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../Common/Theme/ThemeType';
import { FONTS, SIZES } from '../../../constants';
import { FeedbackIcon, PremiumCrown, Privacypolicy, language, ligting, mic, profile, reminder, reset, step } from '../../../constants/icons';
import { Avatar, Card, Icon, LinearProgress } from '@rneui/themed';
import DownArrow from '../../Common/Componants/DownArrow';

const MeTab = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    cardText: {
      fontWeight: '500',
      ...FONTS.h3,
      color: colors.cardColor,
    },
    cardMainContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16,
      height: 75,
      borderRadius: 15,
      width: '100%',
      backgroundColor: colors.gray1,
      borderWidth: 2,
      borderColor: colors.gray2,
    },
    avatarContainer: {
      backgroundColor: '#BDBDBD',
      borderRadius: 10,
      marginRight: 20,
      height: 44,
      width: 44,
      padding: 10
    },
    cardOuterContainer: {
      borderRadius: 15,
      width: '100%',
      backgroundColor: colors.gray1,
      borderWidth: 2,
      borderColor: colors.gray2,
      paddingHorizontal: 20,
      marginVertical: 5
    },
    cardItems: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 75,
    },
    CardItemsContainer: {
      height: 64, flex: 1,
      justifyContent: 'space-between',
      borderBottomColor: colors.gray2,
      borderBottomWidth: 1.5,
      alignItems: 'center',
      flexDirection: 'row'
    },
    cardEndContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardEndText: {
      color: colors.primary,
      ...FONTS.body4
    },
    btnPremium: {
      width: '100%',
      height: 50,
      borderRadius: 30,
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'center',
    }

  })
  const ScreenHeader = () => {

    const ProgressBar = () => {
      const [progress, setProgress] = React.useState(10);
      return (
        <>
          <View style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 20
          }}>
            <LinearProgress
              style={{
                marginVertical: 10,
                height: 10,
                borderRadius: 20,
              }}
              value={progress / 100}
              variant="determinate"
              color='rgba(255, 255, 255, 1)'
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: colors.background }}>Progress</Text>
              <Text style={{ color: colors.background }}>{progress}%</Text>
            </View>
          </View>
        </>
      )
    }

    return (
      <View>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 1]}
          colors={[`${colors.grade1}`, `${colors.grade2}`]}
          style={{
            // height: 222,
            width: SIZES.width,
          }}
        >
          <SafeAreaView>
            <View
              style={{
                flexDirection: 'row', alignItems: 'center',
                // justifyContent: 'center',
                height: 70,
                width: 240,
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: 70
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{
                    ...FONTS.Bebas1,
                    color: colors.background,
                    fontSize: 32,
                    fontWeight: '800',

                  }}>
                  13
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: colors.background,
                    // fontSize: 32,
                    fontWeight: '400',
                    opacity: 0.5

                  }}>
                  Complete</Text>
              </View>
              <View style={{
                height: 70, width: 1.5, backgroundColor: 'white',
                opacity: 0.2
              }}></View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Image source={ligting} resizeMode='contain' style={{
                    height: 15, width: 15, padding: 5, tintColor: colors.white
                  }} />
                  <Image source={ligting} resizeMode='contain' style={{
                    height: 15, width: 15, padding: 5, tintColor: colors.white
                  }} />
                  <Image source={ligting} resizeMode='contain' style={{
                    height: 15, width: 15, padding: 5, tintColor: colors.white
                  }} />
                </View>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: colors.background,
                    // fontSize: 32,
                    fontWeight: '400',
                    opacity: 0.5
                  }}>
                  Level
                </Text>
              </View>
            </View>
            <ProgressBar />
          </SafeAreaView>
        </LinearGradient>
      </View>
    )
  }

  const MenuSection = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <>
        <View style={{ padding: 20 }}>
          <View style={{ marginVertical: 9 }}>
            <TouchableOpacity
              style={styles.cardMainContainer}
            >
              <Avatar
                size={44}
                source={profile}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <Text style={styles.cardText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardOuterContainer}>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar
                size={44}
                source={ligting}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <Text style={styles.cardText}>
                  Level
                </Text>
                <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Intermediate
                  </Text>
                  <DownArrow />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar
                size={44}
                source={reminder}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Reminder
                  </Text>
                  <Text style={{ color: colors.grayText }}>Every day</Text>
                </View>
                <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Off
                  </Text>
                  <DownArrow />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar

                size={44}
                source={reset}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Reset progress
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                {/* <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Off
                  </Text>
                  <DownArrow />
                </View> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar

                size={44}
                source={step}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Step Tracking
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                <View style={styles.cardEndContainer}>
                  <Switch
                    trackColor={{ false: '#767577', true: 'rgba(246, 86, 38, .5)' }}
                    thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar

                size={44}
                source={language}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Language options
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    English
                  </Text>
                  <DownArrow />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar

                size={44}
                source={mic}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Voice Options (TTS)
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                {/* <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Off
                  </Text>
                  <DownArrow />
                </View> */}
              </View>
            </TouchableOpacity>

            <LinearGradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              locations={[0, 1]}
              colors={[`${colors.grade1}`, `${colors.grade2}`]}
              style={styles.btnPremium}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={PremiumCrown} style={{ height: 22, width: 40, tintColor: 'white' }} />
                <Text style={{
                  ...FONTS.h2,
                  margin: 10,
                  color: colors.background,
                  textTransform: 'uppercase'
                }}>
                  GO premium
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.cardOuterContainer}>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar
                size={44}
                source={FeedbackIcon}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Privacy policy
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                {/* <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Off
                  </Text>
                  <DownArrow />
                </View> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardItems}  >
              <Avatar

                size={44}
                source={Privacypolicy}
                avatarStyle={{ tintColor: 'white' }}
                containerStyle={styles.avatarContainer}
              >
              </Avatar>
              <View style={styles.CardItemsContainer}>
                <View>
                  <Text style={styles.cardText}>
                    Feedback
                  </Text>
                  {/* <Text style={{ color: colors.grayText }}>Every day</Text> */}
                </View>
                {/* <View style={styles.cardEndContainer}>
                  <Text style={styles.cardEndText}>
                    Off
                  </Text>
                  <DownArrow />
                </View> */}
              </View>
            </TouchableOpacity>
          </View>
        </View >
      </>
    )
  }
  return (
    <View>
      <StatusBar translucent={true} barStyle={'dark-content'}
        backgroundColor={'transparent'} />
      <ScreenHeader />
      <ScrollView style={{ marginBottom: 210 }}>
        <MenuSection />
      </ScrollView>
    </View>
  )
}

export default MeTab
