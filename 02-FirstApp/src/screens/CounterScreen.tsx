/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type actionType = 'add'|'substract';

const CounterScreen = () => {

    const [count, setCount] = useState(10);

    const uTouchMe = (action:actionType) => {
        if (action === 'substract') {
            setCount(count - 1);
            console.log('nice... ;):', count);
        } else {
            setCount(count + 1);
            console.log('really nice... ;):', count);
        }
    };

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#1d4c67',
        justifyContent: 'center',
    }}>
        <Text style={{
            fontSize: 45,
            textAlign: 'center',
            color: 'white',
        }}>
            Counter: {count}
        </Text>
        <Button
            onPress={() => uTouchMe('substract')}
            title="Touch me..."
            color="#0bb4e5"
            accessibilityLabel="Be gentle"
        />
        <Button
            onPress={() => uTouchMe('add')}
            title="Touch me HARDER..."
            color="#0bb4e5"
            accessibilityLabel="Be gentle"
        />
    </View>
  );
};

export default CounterScreen;
