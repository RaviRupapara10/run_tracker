import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from './Theme/ThemeType';




const MyBtn = (props: any) => {
    const { colors } = useTheme();

    return (
        <>
            <View style={{ padding: 10, borderRadius: 15, borderWidth: 1, borderColor: colors.gray2 }}>
                <Image source={props.source} style={{ height: 20, width: 20 }} />
            </View>
        </>
    )
}

export default MyBtn
