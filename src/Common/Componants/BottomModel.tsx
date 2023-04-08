import { Dimensions, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Theme/ThemeType';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';


const { height: ScreenHeight } = Dimensions.get('window')
const BottomModel = (props: any) => {
    const { colors } = useTheme();
    const translateY = useSharedValue(0);

    const handleModal = () => {
        if (props.changeVisibility) {
            props.changeVisibility(!props.modalVisible);
        }
    };  

    const gesture = Gesture.Pan().onUpdate((event) => {
        console.log(event.translationY);

        translateY.value = event.translationY

    })


    const rBotttomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    })

    return (
        // <GestureHandlerRootView style={{ flex: 1 }}>
        // <Modal
        //     statusBarTranslucent={true}
        //     animationType="slide"
        //     transparent={true}
        //     visible={props.modalVisible}

        //     onRequestClose={() => {
        //         handleModal();

        //     }}>
        // <Pressable
        //     onPress={handleModal}
        //     style={styles.centeredView}>
        // </Pressable>

        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.modalView, { backgroundColor: 'white' }, rBotttomSheetStyle]}>

                <View style={{ height: 4, width: 75, backgroundColor: 'gray', marginVertical: 15 }}>
                </View>
                {props.children}
            </Animated.View >
        </GestureDetector>
        // </Modal >
        // </GestureHandlerRootView>
    )
}

export default BottomModel

const styles = StyleSheet.create({
    modalView: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        // bottom: 0,
        // left: 0,
        // right: 0,
        position: 'absolute',
        height: ScreenHeight,
        top: ScreenHeight / 1.5,
        width: '100%'


    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10,
        backgroundColor: '#111'
    },
})