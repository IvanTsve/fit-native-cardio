import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { commonStyles } from '@/styles/Common';

export default function Progress() {
    const [steps, setSteps] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setSteps(0);
        setCalories(0);
        setMinutes(0);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.progressTitle}>Today's Progress</Text>
            <View style={commonStyles.progressContainer}>
                <View>
                    <Text>Steps</Text>
                    <Text>{steps}</Text>
                </View>
                <View>
                    <Text>Calories</Text>
                    <Text>{calories}</Text>
                </View>
                <View>
                    <Text>Minutes</Text>
                    <Text>{minutes}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        marginTop: -15
    },
    progressTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        marginBottom: 10,
    }
});