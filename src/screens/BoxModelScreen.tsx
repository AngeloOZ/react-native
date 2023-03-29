import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export const BoxModelScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Hola Mundo</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'royalblue',
    },
    title: {

    }
});
