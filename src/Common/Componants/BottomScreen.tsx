import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const BottomScreen = (props: any) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [`${props.height}%`], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
    if (index == -1) {
      props.handleState(false)
    }
  }, []);








  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={bottomSheetRef.current?.close()}

      />
    ),
    []
  );
  // renders
  return (

    <View style={styles.container}>
      {/* <Pressable style={{ backgroundColor: 'gray', flex: 1 }}>
      </Pressable> */}
      {/* <StatusBar backgroundColor={'gray'} /> */}


      <BottomSheet
         ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        // enableHandlePanningGesture={true}
        backdropComponent={renderBackdrop}


      >

        <View style={styles.contentContainer}>
          {props.children}
        </View>
      </BottomSheet >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
    height: '100%',
    width: '100%'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomScreen;