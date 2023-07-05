import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const Contain = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ backgroundColor: "#F8F8F8", padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Place Holder</Text>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <Text style={{ flex: 1 }}>Place Holder</Text>
        <View>
          <Switch
            trackColor={{ false: '##FFFFFF', true: '##FFFFFF' }}
            thumbColor={isEnabled ? '##023E8A' : '##EDEDED'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <Text style={{ flex: 1 }}>Place Holder</Text>
        <View>
          <Switch
            trackColor={{ false: '##FFFFFF', true: '##FFFFFF' }}
            thumbColor={isEnabled ? '##023E8A' : '##EDEDED'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <Text style={{ flex: 1 }}>Place Holder</Text>
        <View>
          <Switch
            trackColor={{ false: '##FFFFFF', true: '##FFFFFF' }}
            thumbColor={isEnabled ? '##023E8A' : '##EDEDED'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>



    </View>
  )
}

export default Contain

const styles = StyleSheet.create({})