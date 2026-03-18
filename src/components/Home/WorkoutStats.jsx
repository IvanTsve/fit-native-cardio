import React from 'react';
import SingleStat from '@/components/Common/SingleStat';
import { View, StyleSheet } from 'react-native';

export default function WorkoutStats() {
    return (
        <View style={styles.container}>
            <SingleStat title="steps" icon='💪' value="10" />
            <SingleStat title="calories" icon='🔥' value="1000" />
            <SingleStat title="minutes" icon='⏰' value="1000" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },
});