import { Image, StatusBar,SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS, SIZES, } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../Common/Theme/ThemeType';
import { boy, girl } from '../../../constants/images';
import { Avatar } from '@rneui/base';

const SelectGender = (props: any) => {
    const { colors } = useTheme();




    function topBars() {
        return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding2, }}>
                <LinearGradient

                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>
                <View style={[styles.topBar, { backgroundColor: colors.gray2 }]}></View>
                <View style={[styles.topBar, { backgroundColor: colors.gray2 }]}></View>
            </View>
        )
    }


    function selectGenderText() {
        return (
            <View style={{ alignItems: 'center', paddingHorizontal: 44 }} >
                <Text style={{
                    color: colors.darkbackground, ...FONTS.h1, fontWeight: '700'
                }}>Select Gender</Text>

                <Text style={{
                    color: colors.grayText, ...FONTS.body3,
                    textAlign: 'center'
                }}>Calories & Stride Length Calculation
                    need it</Text>
            </View>
        )
    }



    function SelectAvatar() {

        const [boySelect, setboySelect] = useState<boolean>()
        const [girlSelect, setgirlSelect] = useState<boolean>()

        const selectBoy = () => {
            setboySelect(true)
            setgirlSelect(false)
        }

        const selectGirl = () => {
            setgirlSelect(true)
            setboySelect(false)
        }

        return (
            <View style={{ flexDirection: 'row', width: SIZES.width, justifyContent: 'center' }}>
                <View>
                    <Avatar
                        onPress={selectBoy}
                        size={boySelect ? 110 : 110}
                        rounded
                        source={boy}

                        avatarStyle={{
                            transform: [{ translateY: 10 }],
                        }}
                        containerStyle={{
                            backgroundColor: '#F5EFFF', margin: 20,
                            borderWidth: boySelect ? 5 : 0, borderColor: colors.primary

                        }}
                    />
                    <Text style={{
                        alignSelf: 'center',
                        ...FONTS.h3,
                        color: boySelect ? colors.darkbackground : colors.grayText
                    }}>Male</Text>
                </View>
                <View>
                    <Avatar
                        onPress={selectGirl}
                        size={girlSelect ? 110 : 110}
                        rounded
                        source={girl}
                        avatarStyle={{
                            transform: [{ translateY: 10 }],
                        }}
                        overlayContainerStyle={{
                            borderWidth: girlSelect ? 5 : 0, borderColor: colors.primary,
                        }}


                        containerStyle={{
                            backgroundColor: '#F5EFFF', margin: 20,
                            // borderWidth: girlSelect ? 5 : 0, borderColor: colors.primary

                        }}
                    />
                    <Text style={{
                        alignSelf: 'center',
                        ...FONTS.h3,
                        color: girlSelect ? colors.darkbackground : colors.grayText
                    }}>Female</Text>
                </View>
            </View>
        )
    }


    function nextstexpButton() {
        return (
            <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('MyProfile')}
            >
                <LinearGradient



                    locations={[0.0, 1.0]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={{
                        height: 60,
                        width: 250,
                        backgroundColor: colors.primary,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        ...FONTS.h3, color: colors.white
                    }}>
                        NEXT STEP
                    </Text>
                </LinearGradient>
            </TouchableWithoutFeedback>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', width: SIZES.width, }}>
            {/* <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'} /> */}
            <View>
                {topBars()}
            </View>
            <View style={{ marginTop: 100 }}>
                {selectGenderText()}
            </View>
            <View style={{ marginTop: 120 }}>
                {SelectAvatar()}

            </View>
            <View style={{ bottom: 0, position: 'absolute', paddingBottom: 30 }}>
                {nextstexpButton()}
            </View>
        </SafeAreaView>
    )
}

export default SelectGender

const styles = StyleSheet.create({
    topBar: {
        width: 62,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
    }
})