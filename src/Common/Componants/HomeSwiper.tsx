import { Animated, Dimensions, FlatList, Image, NativeSyntheticEvent, Platform, Pressable, ScrollViewComponent, StyleSheet, Text, View } from 'react-native'
import React, { LegacyRef, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from "../../Common/Theme/ThemeType";
// import LinearGradient from 'react-native-linear-gradient';
import { CloclTotal, Run, Walk } from '../../../constants/icons';
import { FONTS, SIZES } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../userModel';


const { width, height } = Dimensions.get('window');


const HomeSwiper = ({ data, selectedDay }: { data: UserType[], selectedDay: number }) => {
  console.log('-----------------', data);

  const navigation = useNavigation()
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { colors } = useTheme();
  const SPACING = 10;
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  const BACKDROP_HEIGHT = height * 0.65;



  const animatedFlatListRef = useRef<any>();

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedFlatListRef?.current?.getNativeScrollRef()?.scrollTo?.({ x: (ITEM_SIZE * (selectedDay - 1)) - (width * 0.12), animated: true })
    animatedFlatListRef?.current?.forceUpdate();
  }, [selectedDay]);

  const onViewableItemsChanged = (e: NativeSyntheticEvent<any>) => {
    const currentIndex = Math.ceil(e.nativeEvent.contentOffset.x / ITEM_SIZE);
    console.log(currentIndex)
    if (currentIndex != activeIndex) {
      setActiveIndex(currentIndex);
      console.log(currentIndex);
    }
  }


  return (
    <View style={{
    }}>

      <Animated.FlatList
        data={data}
        ref={animatedFlatListRef}
        horizontal
        pagingEnabled
        snapToInterval={ITEM_SIZE}
        snapToAlignment='center'
        bounces={false}
        decelerationRate={3}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
            listener: onViewableItemsChanged
          }
        )}
        renderItem={({ item, index }) => {

          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 10, 50],
            extrapolate: 'clamp',
          });

          const opaacityY = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          return (
            <View style={{
              width: ITEM_SIZE,
              height: 400,
              justifyContent: 'center'
            }} >
              <Animated.View style={{
                transform: [{ translateY }],
                opacity: opaacityY
              }}>
                <View style={{
                  height: 330,
                  borderRadius: 30,
                  backgroundColor: colors.gray1,
                  borderWidth: 2,
                  borderColor: colors.gray2,
                  // padding: 20,
                  margin: 5,
                  // marginTop: 40,
                  alignItems: 'center',
                }}
                >
                  <View
                    style={{
                      padding: 30,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 64,
                        fontFamily: "BebasNeue",
                        color: colors.cardColor,
                        textTransform: "uppercase",

                      }}
                    >
                      Day {item.dayName}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: 250
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <LinearGradient
                        locations={[0.0, 1.0]}
                        colors={[`${colors.grade1}`, `${colors.grade2}`]}
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={Run}
                          style={{ height: 20, width: 15, tintColor: "while", resizeMode: 'contain' }}
                        />
                      </LinearGradient>
                      <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                        {item.walkTime}:00
                      </Text>
                      <Text style={{ ...FONTS.body4 }}>walk</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <LinearGradient
                        locations={[0.0, 1.0]}
                        colors={[`${colors.grade1}`, `${colors.grade2}`]}
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={Walk}
                          style={{ height: 20, width: 10, tintColor: "while", resizeMode: 'contain' }}
                        />
                      </LinearGradient>
                      <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                        {item.runTime}:00
                      </Text>
                      <Text style={{ ...FONTS.body4 }}>Run</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: colors.grayText,
                        }}
                      >
                        <Image
                          source={CloclTotal}
                          style={{ height: 20, width: 18, tintColor: "while", resizeMode: 'contain' }}
                        />
                      </View>
                      <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                        {item.totalTime}:00
                      </Text>
                      <Text style={{ ...FONTS.body4 }}>Total</Text>
                    </View>
                  </View>
                  <Pressable
                    onPress={() => navigation.navigate('StartScreen' as never)}
                    style={{ alignSelf: "center", margin: 20, marginTop: 50 }}>
                    <LinearGradient
                      locations={[0.0, 1.0]}
                      colors={[`${colors.grade1}`, `${colors.grade2}`]}
                      style={{
                        height: 44,
                        width: 200,
                        borderRadius: 22,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: colors.background, ...FONTS.body3 }}>
                        Start
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </View>
                <View

                  style={{ position: "absolute", alignSelf: "center", top: -15 }}>
                  <LinearGradient
                    locations={[0.0, 1.0]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={{
                      height: 44,
                      width: 117,
                      borderRadius: 22,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: colors.background, ...FONTS.h2 }}>
                      WEEK {item.weekName}
                    </Text>
                  </LinearGradient>
                </View>
              </Animated.View>
            </View>

          )
        }}
      />
    </View >
  )
}

export default HomeSwiper

const styles = StyleSheet.create({
  weeks: {
    height: 60,
    width: 95,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  whiperText: {
    fontFamily: "BebasNeue",
    fontSize: 18,
    paddingTop: 3,
  },
})