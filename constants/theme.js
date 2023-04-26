/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
import { View, Text, useColorScheme, SafeAreaView, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');


export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 24,
    h3: 18,
    h4: 15,
    body1: 30,
    body2: 20,
    body3: 18,
    body4: 15,

    // app dimensions
    width,
    height
     
};

export const FONTS = {
    largeTitle: { fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1,  },//use
    h2: { fontFamily: 'Roboto-Black', fontSize: SIZES.h2, },
    h3: { fontFamily: 'Roboto-Black', fontSize: SIZES.h3, },//use
    h4: { fontFamily: 'Roboto-Black', fontSize: SIZES.h4, },
    body1: { fontFamily: 'Roboto', fontSize: SIZES.body1, },
    body2: { fontFamily: 'Roboto', fontSize: SIZES.body2 },
    body3: { fontFamily: 'Roboto', fontSize: SIZES.body3, },
    body4: { fontFamily: 'Roboto', fontSize: SIZES.body4, },
    HomeCard: { fontFamily: 'Roboto', fontSize: SIZES.body3, lineHeight: 20 },//home card
    Bebas1: { fontFamily: 'BebasNeue', fontSize: SIZES.h1, },
    Bebas2: { fontFamily: 'BebasNeue', fontSize: SIZES.h2, },
    Bebas3: { fontFamily: 'BebasNeue', fontSize: SIZES.h3, },
    Bebas4: { fontFamily: 'BebasNeue', fontSize: SIZES.h4, },
};

const appTheme = {
    //  COLORS, 
    SIZES, FONTS,
};

export default appTheme;