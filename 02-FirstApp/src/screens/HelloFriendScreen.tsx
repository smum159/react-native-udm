/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';


export const HelloFriendScreen = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
      }}>
      <Text style={{
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
      }}>
        Hello Friend... :3
      </Text>
    </View>
  )
}

export default HelloFriendScreen;
