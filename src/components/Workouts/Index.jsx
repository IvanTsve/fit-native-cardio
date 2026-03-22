import React from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyles } from '@/styles/Common';
import Title from '@/components/Common/Title';
import Search from '@/components/Workouts/Search';
import TotalWorkouts from '@/components/Workouts/TotalWorkouts';
import SingleWorkout from '@/components/Common/SingleWorkout';
import mockWorkouts from '@/services/workouts';
export default function Index() {

    const handleSearch = (text) => {
        console.log(text);
    };

    return (
        <ScrollView>
            <View style={commonStyles.mainContainer}>
                <Title title="My Workouts" />
                <Search onChangeText={handleSearch} />
                <TotalWorkouts workouts={mockWorkouts} />
                {mockWorkouts.map((workout) => (
                    <SingleWorkout key={workout.id} workout={workout} />
                ))}
            </View>
        </ScrollView>
    );
}