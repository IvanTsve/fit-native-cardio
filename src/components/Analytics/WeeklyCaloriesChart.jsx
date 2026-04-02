import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { getWorkouts } from '@/services/workouts';
import { commonStyles } from '@/styles/Common';
import { useState, useEffect } from 'react';    

dayjs.extend(isoWeek);

const BAR_COLOR = '#12C660';
const EMPTY_COLOR = '#E5E7EB';

const WEEK_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH_LABELS = ['W1', 'W2', 'W3', 'W4'];

function buildWeekData(workouts) {
    const startOfWeek = dayjs().startOf('isoWeek');
    const totals = Array(7).fill(0);

    workouts.forEach(({ date, calories }) => {
        if (!date) return;
        const diff = dayjs(date).diff(startOfWeek, 'day');
        if (diff >= 0 && diff < 7) totals[diff] += calories;
    });

    return WEEK_LABELS.map((label, i) => ({
        value: totals[i],
        label,
        frontColor: totals[i] > 0 ? BAR_COLOR : EMPTY_COLOR,
    }));
}

function buildMonthData(workouts) {
    const now = dayjs();
    const month = now.month();
    const year = now.year();
    const totals = Array(4).fill(0);

    workouts.forEach(({ date, calories }) => {
        if (!date) return;
        const d = dayjs(date);
        if (d.month() !== month || d.year() !== year) return;
        const weekIdx = Math.min(Math.floor((d.date() - 1) / 7), 3);
        totals[weekIdx] += calories;
    });

    return MONTH_LABELS.map((label, i) => ({
        value: totals[i],
        label,
        frontColor: totals[i] > 0 ? BAR_COLOR : EMPTY_COLOR,
    }));
}

export default function WeeklyCaloriesChart({ range = 'week' }) {
const [workouts, setWorkouts] = useState([]);
useEffect(() => {
    getWorkouts().then((data) => {
        setWorkouts(data);
    });
}, []);
    const isMonth = range === 'month';
    const data = isMonth ? buildMonthData(workouts) : buildWeekData(workouts);
    const maxVal = Math.max(...data.map(d => d.value));
    const roundedMax = Math.ceil(maxVal / 200) * 200 || 400;

    return (
        <View style={styles.card}>
            <Text style={commonStyles.sectionTitle}>
                {isMonth ? 'Monthly Calories' : 'Weekly Calories'}
            </Text>
            <BarChart
                data={data}
                barWidth={isMonth ? 55 : 32}
                spacing={isMonth ? 20 : 14}
                roundedTop
                hideRules
                xAxisThickness={1}
                xAxisColor="#E5E7EB"
                yAxisThickness={0}
                yAxisTextStyle={styles.axisText}
                xAxisLabelTextStyle={styles.axisText}
                noOfSections={4}
                maxValue={roundedMax}
                barBorderRadius={6}
                width={290}
                yAxisSuffix=" cal"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    axisText: {
        fontSize: 11,
        color: '#9CA3AF',
    },
});
