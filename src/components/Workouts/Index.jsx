import React from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyles } from '@/styles/Common';
import Title from '@/components/Common/Title';
import Search from '@/components/Workouts/Search';
import TotalWorkouts from '@/components/Workouts/TotalWorkouts';
import SingleWorkout from '@/components/Common/SingleWorkout';
import { getWorkouts } from '@/services/workouts';
import { useState, useEffect } from 'react';
export default function Index() {

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        getWorkouts().then((data) => {
            setWorkouts(data);
        });
    }, []);

    const handleSearch = (text) => {
        console.log(text);
    };

    const handleEditWorkout = (id) => {
        console.log(id);
    };

    const handleDeleteWorkout = (id) => {
        console.log(id);
    };

    return (
        <ScrollView>
            <View style={commonStyles.mainContainer}>
                <Title title="My Workouts" />
                <Search onChangeText={handleSearch} />
                <TotalWorkouts workouts={workouts} />
                {workouts.map((workout) => (
                    <SingleWorkout showDelete={true} key={workout.id} workout={workout} handleEditWorkout={handleEditWorkout} handleDeleteWorkout={handleDeleteWorkout} />
                ))}
            </View>
        </ScrollView>
    );
}