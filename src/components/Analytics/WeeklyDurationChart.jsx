import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import mockWorkouts from '@/services/workouts';
import { commonStyles } from '@/styles/Common';

dayjs.extend(isoWeek);

const BAR_COLOR = '#6366F1';
const EMPTY_COLOR = '#E5E7EB';

const WEEK_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH_LABELS = ['W1', 'W2', 'W3', 'W4'];

function parseDurationMinutes(durationStr) {
    return parseInt(durationStr, 10) || 0;
}

function buildWeekData() {
    const startOfWeek = dayjs().startOf('isoWeek');
    const totals = Array(7).fill(0);

    mockWorkouts.forEach(({ date, duration }) => {
        if (!date) return;
        const diff = dayjs(date).diff(startOfWeek, 'day');
        if (diff >= 0 && diff < 7) totals[diff] += parseDurationMinutes(duration);
    });

    return WEEK_LABELS.map((label, i) => ({
        value: totals[i],
        label,
        frontColor: totals[i] > 0 ? BAR_COLOR : EMPTY_COLOR,
    }));
}

function buildMonthData() {
    const now = dayjs();
    const month = now.month();
    const year = now.year();
    const totals = Array(4).fill(0);

    mockWorkouts.forEach(({ date, duration }) => {
        if (!date) return;
        const d = dayjs(date);
        if (d.month() !== month || d.year() !== year) return;
        const weekIdx = Math.min(Math.floor((d.date() - 1) / 7), 3);
        totals[weekIdx] += parseDurationMinutes(duration);
    });

    return MONTH_LABELS.map((label, i) => ({
        value: totals[i],
        label,
        frontColor: totals[i] > 0 ? BAR_COLOR : EMPTY_COLOR,
    }));
}

export default function WeeklyDurationChart({ range = 'week' }) {
    const isMonth = range === 'month';
    const data = isMonth ? buildMonthData() : buildWeekData();
    const maxVal = Math.max(...data.map(d => d.value));
    const roundedMax = Math.ceil(maxVal / 60) * 60 || 120;

    return (
        <View style={styles.card}>
            <Text style={commonStyles.sectionTitle}>
                {isMonth ? 'Monthly Duration' : 'Weekly Duration'}
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
                yAxisSuffix=" min"
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
