import { Image, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../Common/Theme/ThemeType';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const ReportTab = () => {

    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
    return (

        <View style={{
            flex: 1, width: SIZES.width,
        }}>
            <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
            <LinearGradient
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0, 1]}
                colors={[`${colors.grade1}`, `${colors.grade2}`]}
                style={{
                    height: 222,
                    width: SIZES.width,
                }}
            >
                <SafeAreaView>
                    <View style={{}}>
                        <Text style={[styles.headerText, { color: colors.background }]}>Report</Text>
                        <View style={{ flexDirection: 'row',marginTop:20 }}>
                            <View style={styles.distanceTextContainer}>
                                <Text style={[styles.distanceText, { color: colors.background }]}>
                                    0:01
                                </Text>
                                <Text style={styles.distanceUnit}>
                                    Mile
                                </Text>
                            </View>
                            <View style={styles.distanceTextContainer}>
                                <Text style={[styles.distanceText, { color: colors.background }]}>
                                    0:01
                                </Text>
                                <Text style={styles.distanceUnit}>
                                    Calories
                                </Text>
                            </View>
                            <View style={styles.distanceTextContainer}>
                                <Text style={[styles.distanceText, { color: colors.background }]}>
                                    0:01
                                </Text>
                                <Text style={styles.distanceUnit}>
                                    Minute
                                </Text>
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

export default ReportTab

const styles = StyleSheet.create({
    headerText: {
        ...FONTS.body2, fontWeight: '700', fontSize: 22,
        lineHeight: 36,
        letterSpacing: -0.3,
        padding: 23
    },
    distanceText: {
        ...FONTS.Bebas4, fontWeight: '400', fontSize: 32,
        lineHeight: 36,
        letterSpacing: -0.3,
    },
    distanceTextContainer: {
        height: 70, width: SIZES.width / 3,
        alignItems: 'center',
        borderRightWidth: 2,
        borderColor: '#ffffff30',
        justifyContent: 'center',


    },
    distanceUnit: {
        color: '#ffffff50',
        ...FONTS.body2,
        fontWeight: '500',
        fontSize: 16
    }
})