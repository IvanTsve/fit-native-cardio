import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { commonStyles } from '@/styles/Common';
import ProgressCircle from '@/components/Common/ProgressCircle';

export default function Progress() {
    const [steps, setSteps] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setSteps(10);
        setCalories(20);
        setMinutes(30);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={commonStyles.sectionTitle}>Today's Progress</Text>
            <View style={commonStyles.progressContainer}>
                <View style={styles.progressItem}>
                    <ProgressCircle percentage={10} />
                    <Text>Steps</Text>
                    <Text style={styles.progressValue}>{steps}</Text>
                </View>
                <View style={styles.progressItem}>
                    <ProgressCircle percentage={20} />
                    <Text>Calories</Text>
                    <Text style={styles.progressValue}>{calories}</Text>
                </View>
                <View style={styles.progressItem}>
                    <ProgressCircle percentage={30} />
                    <Text>Minutes</Text>
                    <Text style={styles.progressValue}>{minutes}</Text>
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
        // marginHorizontal: 30,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        marginTop: -15
    },
    progressTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        marginBottom: 10,
    },
    progressItem: {
       width: '33%',
       alignItems: 'center',
       justifyContent: 'center',
    },
    progressValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
    }
});