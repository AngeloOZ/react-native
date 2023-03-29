import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);

    const increment = () => {
        setContador(contador + 1);
    }
    const decrement = () => {
        setContador(contador -1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            <Fab
                title='-1'
                onPress={decrement}
                position='bl'
            />
            <Fab
                title='+1'
                onPress={increment}
                position='br'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
});
