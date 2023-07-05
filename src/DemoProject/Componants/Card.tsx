import { View, Text, Image, Pressable, ViewBase } from 'react-native'
import React, { useState } from 'react'
import { Avatar, ListItem } from '@rneui/themed';
import { DownArrowDemo } from '../../../constants/icons';
import Contain from './Contain';

const Card = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleCard = () => setExpanded(previousState => !previousState);
  return (
    <View>
      <Pressable
        onPress={toggleCard}
        style={{ flexDirection: "row", alignItems: "center", padding: 24, borderWidth: 0.5, borderBottomColor: '#E0E0E0', elevation: 1 }}>
        <View style={{}}>
          <Avatar
            size={64}
            rounded
            containerStyle={{ backgroundColor: "#FF8F8F" }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Place holder</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1 }}>00000000</Text>
            <View
              style={{}}>
              <Image source={DownArrowDemo} style={{ height: 20, resizeMode: 'contain', width: 20 }} />
            </View>
          </View>
        </View>
      </Pressable>
      {expanded && <Contain />}
    </View>
  );
}
export default Card