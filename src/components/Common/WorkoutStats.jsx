import React from 'react';
import SingleStat from '@/components/Common/SingleStat';
import { View, StyleSheet } from 'react-native';

export default function WorkoutStats({ range }) {
    return (
        <View style={styles.container}>
            <SingleStat title="steps" icon='💪' value={range === 'week' ? '10' : '100'} />
            <SingleStat title="calories" icon='🔥' value={range === 'week' ? '1000' : '10000'} />
            <SingleStat title="minutes" icon='⏰' value={range === 'week' ? '1000' : '10000'} />
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