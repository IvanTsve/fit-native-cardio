import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';
import Title from '@/components/Common/Title';
import Action from '@/components/Common/Action';
import WorkoutStats from '@/components/Common/WorkoutStats';
import WeeklyCaloriesChart from '@/components/Analytics/WeeklyCaloriesChart';
import WeeklyDurationChart from '@/components/Analytics/WeeklyDurationChart';

export default function Index() {
    const [range, setRange] = useState('week');
    const actions = [
        {
            id: 1,
            title: 'Week',
            onPress: () => setRange('week'),
            active: range === 'week',
        },
        {
            id: 2,
            title: 'Month',
            onPress: () => setRange('month'),
            active: range === 'month',
        },
    ];

    return (
        <ScrollView>
            <View style={commonStyles.mainContainer}>
                <Title title="Analytics" />
                <View style={styles.actionsRow}>
                    {actions.map(action => (
                        <Action
                            key={action.id}
                            style={styles.actionFlex}
                            title={action.title}
                            onPress={action.onPress}
                            active={action.active}
                        />
                    ))}
                </View>
                <WorkoutStats range={range} />
                <WeeklyCaloriesChart range={range} />
                <WeeklyDurationChart range={range} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    actionsRow: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'stretch',
        width: '100%',
    },
    actionFlex: {
        flex: 1,
        minWidth: 0,
    },
});
