import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';
import SingleWorkout from '@/components/Common/SingleWorkout';
import mockWorkouts from '@/services/workouts';
export default function RecentWorkouts() {
    

    return (
        <View>
            <View style={styles.container}>
                <Text style={[commonStyles.sectionTitle, {marginBottom: 0}]}>Recent Workouts</Text>
                <TouchableOpacity>
                    <Text style={styles.more}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{gap: 25, marginBottom: 20}}>
               {mockWorkouts.slice(-3).map((workout) => (
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