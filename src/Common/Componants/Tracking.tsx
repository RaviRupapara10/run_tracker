import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../Theme/ThemeType'
import { Setting, location, lockIcon, nextIcon, pouse, previousIcon, signal } from '../../../constants/icons'
import { FONTS, SIZES } from '../../../constants'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'
import { FAB } from '@rneui/base'

const Tracking = () => {
   const { colors } = useTheme();
   const [exercise, setExercise] = useState(Array.from(new Array(10).keys()));
   const [selectedIndex, setSelectedIndex] = useState(0);

   const isWalk = selectedIndex % 2 == 0;
   const exerciseLenght = exercise.length;




   const styles = StyleSheet.create({
      backgroundColor: {
         flex: 1,
         height: '100%',
         width: '100%',
      }
   })

   const ProgrressNumber = () => {

      const styles = StyleSheet.create({
         container: {
            paddingHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'center',
         }
      })
      return (
         <View style={styles.container}>
            {
               exercise.map((x, i) => (
                  <View key={i} style={{
                     width: (SIZES.width / exercise.length) - 2,
                     backgroundColor: selectedIndex < i ? 'rgba(255,255,255,0.2)' : 'white', height: 10,
                     borderRadius: 5,
                  }}>

                  </View>
               ))
            }
         </View >
      )
   }

   const TimeLeft = () => {
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


      const BackBtnClick = () => {
         if (selectedIndex == 0) {
            setSelectedIndex(0)
         }
         else {
            setSelectedIndex(selectedIndex - 1)
         }
      }

      const NextBtnClick = () => {
         if (selectedIndex + 1 < exercise.length) {
            setSelectedIndex(selectedIndex + 1)
         }

      }
      return (
         <>
            <View style={{
               flexDirection: 'row', width: SIZES.width, padding: 20,
               justifyContent: 'space-between',
               alignItems: 'center'
            }}>
               <Pressable style={{ height: 40, width: 40 }} onPress={BackBtnClick}>
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
                        <Text style={{ ...FONTS.Bebas, fontSize: 28, color: 'white' }}>{isWalk ? 'Walk' : 'Run'}</Text>
                        <Text style={{ ...FONTS.Bebas, fontSize: 56, margin: 20, color: 'white' }}>00:48</Text>
                        <Text style={{ ...FONTS.Bebas, fontSize: 22, color: 'rgba(255, 255, 255, 0.5)' }}>{selectedIndex + 1}/{exercise.length}</Text>
                     </View>
                  </CircularProgressBase>
               </View>
               <Pressable style={{ height: 40, width: 40 }} onPress={NextBtnClick}>
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

   const MapBtns = () => {
      const styles = StyleSheet.create({
         container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            paddingHorizontal: 20,
         },
         smallBtnBack: {
            height: 44,
            width: 44,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 22,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
         },
         smallIcon: {
            resizeMode: 'contain',
            height: 20,
            width: 20,
         },
         bigIconBack: {
            height: 85, width: 85,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 60,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
         },
         bigIcon: {
            resizeMode: 'contain',
            height: 30,
            width: 30,
         }

      })
      return (
         <>
            <View style={styles.container}>
               <Pressable style={styles.smallBtnBack}>
                  <Image source={location} style={styles.smallIcon} />
               </Pressable>
               <Pressable style={styles.bigIconBack}>
                  <Image source={pouse} style={styles.bigIcon} />
               </Pressable>
               <Pressable style={styles.smallBtnBack}>
                  <Image source={lockIcon} style={styles.smallIcon} />
               </Pressable>
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
            colors={isWalk ? [`${colors.firstGrade1}`, `${colors.firstGrade2}`] : [`${colors.secondGrade1}`, `${colors.secondGrade2}`]}
            style={styles.backgroundColor}
         >
            <SafeAreaView>
               <View style={{ marginVertical: 10 }}>
                  <ProgrressNumber />
               </View>
               <TimeLeft />
               <View style={{ marginTop: 20 }}>
                  <ProgrressBAr />
               </View>
               <View style={{ marginTop: 50 }}>
                  <TimeAndDistance />
               </View>
               <View style={{ marginTop: 50 }}>
                  <MapBtns />
               </View>
            </SafeAreaView>
         </LinearGradient >
      </>
   )
}

export default Tracking

const styles = StyleSheet.create({})