import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function parseDurationMinutes(duration) {
    const n = Number(String(duration).trim().split(/\s+/)[0]);
    return Number.isFinite(n) ? n : 0;
}

function formatTotalMinutes(totalMinutes) {
    const d = dayjs.duration(totalMinutes, 'minutes');
    const h = d.hours();
    const m = d.minutes();
    if (h === 0) return `${m}min`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}min`;
}

export default function TotalWorkouts({ workouts }) {
    const { amount, calories, timeLabel } = useMemo(() => {
        const amount = workouts.length;
        const calories = workouts.reduce((acc, w) => acc + w.calories, 0);
        const totalMinutes = workouts.reduce(
            (acc, w) => acc + parseDurationMinutes(w.duration),
            0
        );
        return {
            amount,
            calories,
            timeLabel: formatTotalMinutes(totalMinutes),
        };
    }, [workouts]);

    return (
        <View style={styles.card}>
            <View style={styles.statPrimary}>
                <Text style={styles.label}>Total Workouts</Text>
                <Text style={styles.value}>{amount}</Text>
            </View>
            <View style={styles.rowSecondary}>
                <View style={styles.statHalf}>
                    <Text style={styles.label}>Total Calories</Text>
                    <Text style={styles.value}>{calories}</Text>
                </View>
                <View style={styles.statHalf}>
                    <Text style={styles.label}>Total Time</Text>
                    <Text style={styles.value}>{timeLabel}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        gap: 20,
        backgroundColor: '#12C660',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 15,
    },
    statPrimary: {
        alignItems: 'start',
        justifyContent: 'start',
        gap: 8,
    },
    rowSecondary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: 12,
    },
    statHalf: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
        gap: 8,
    },
    label: {
        color: 'white',
        fontSize: 13,
        textAlign: 'left',
    },
    value: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});
