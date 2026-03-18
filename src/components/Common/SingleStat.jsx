import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SingleStat({ title, value, icon }) {
    return (
        <View style={styles.singleStatContainer}>
            <Text style={styles.singleStatIcon}>{icon}</Text>
            <View>
                <Text style={styles.singleStatValue}>{value}</Text>
                <Text>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    singleStatContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        borderRadius: 15,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        gap: 15,
    },

    singleStatIcon: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    singleStatValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});