import { Pressable, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../Common/Theme/ThemeType';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, SIZES } from '../../../constants';

const SelectPlan = (props: any) => {
    const { colors } = useTheme();





    function topBars() {
        return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding2, }}>
                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>

                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>
                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>
            </View>
        )
    }




    function selectGenderText() {
        return (
            <View style={{ alignItems: 'center', }} >
                <Text style={{
                    color: colors.darkbackground, ...FONTS.h1, fontWeight: '700'
                }}>Select training plan</Text>

                <Text style={{
                    color: colors.grayText, ...FONTS.body3,
                    textAlign: 'center'
                }}>You can change it antime you want.</Text>
            </View>
        )
    }




    function SelectPlan() {
        return (
            <View style={{ padding: 20 }}>
                <View>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={[`${colors.grade1}`, `${colors.grade2}`]}
                        style={styles.plan}>
                        <Text>Beginner</Text>
                        <Text>Just start to run</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>

                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }







    function nextstexpButton() {
        return (
            <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('SelectPlan')}
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
                        Done
                    </Text>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', width: SIZES.width, paddingHorizontal: 20 }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <View>
                {topBars()}
            </View>
            <View style={{ marginTop: 100 }}>
                {selectGenderText()}
            </View>
            <View style={{ marginTop: 30 }}>
                {SelectPlan()}

            </View>
            <View style={{ bottom: 0, position: 'absolute', paddingBottom: 30 }}>
                {nextstexpButton()}
            </View>
        </View>
    )
}

export default SelectPlan

const styles = StyleSheet.create({
    topBar: {
        width: 62,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
    },
    plan: {
        height: 115, width: 335,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 20,
    }
})