import React from 'react'
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'royalblue',
            justifyContent: 'center',
            // alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                color: 'white',
                textAlign: 'center'
            }}>Hola mundo!</Text>
        </View>
    )
}