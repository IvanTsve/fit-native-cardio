import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';
import SingleWorkout from '@/components/Common/SingleWorkout';

export default function RecentWorkouts() {
    let mockWorkouts = [
        {
            id: 1,
            name: 'Workout 1',
            duration: '30 minutes',
            calories: 300,
            steps: 1000,
            image: 'https://via.placeholder.com/150',
            date: '2026-03-18',
            time: '10:00:00',
            distance: 1000,
        },
        {
            id: 2,
            name: 'Workout 2',
            duration: '45 minutes',
            calories: 400,
            steps: 1500,
            image: 'https://via.placeholder.com/150',
            date: '2026-03-18',
            time: '16:00:00',
            distance: 1500,

        },
        {
            id: 3,
            name: 'Workout 3',
            duration: '60 minutes',
            calories: 500,
            steps: 2000,
            image: 'https://via.placeholder.com/150',
            date: '2026-03-18',
            time: '21:34:00',
            distance: 2000,
        },
        {
            id: 4,
            name: 'Workout 4',
            duration: '75 minutes',
            calories: 600,
            steps: 2500,
            image: 'https://via.placeholder.com/150',
            date: '2026-03-18',
            time: '09:07:00',
            distance: 2500,
        },
    ];


    return (
        <View>
            <View style={styles.container}>
                <Text style={[commonStyles.sectionTitle, {marginBottom: 0}]}>Recent Workouts</Text>
                <TouchableOpacity>
                    <Text style={styles.more}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{gap: 25, marginBottom: 20}}>
               {mockWorkouts.map((workout) => (
                <SingleWorkout key={workout.id} workout={workout} />
               ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    more: {
        color: '#12C660',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    
});