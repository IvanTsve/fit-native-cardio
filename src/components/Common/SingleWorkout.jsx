import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '@/styles/Common';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default function SingleWorkout({ workout, showDelete = false, handleEditWorkout, handleDeleteWorkout }) {
    const formattedDate = dayjs(workout.date).format('DD/MM/YYYY');
    const formattedTime = dayjs(workout.time, 'HH:mm:ss').format('hh:mm A');
    const distanceKm =
        typeof workout.distance === 'number'
            ? workout.distance >= 100 ? workout.distance / 1000 : workout.distance
            : Number.NaN;
    const formattedDistance =
        typeof workout.distance === 'string'
            ? workout.distance
            : Number.isFinite(distanceKm)
                ? `${distanceKm.toFixed(1)} km`
                : '';

    return (
        <View style={styles.container}>
            <Text style={commonStyles.sectionTitle}>{workout.name}</Text>
            <View style={styles.titleRow}>
                <View style={styles.titleRow}>
                    <Ionicons name="calendar-outline" size={22} color="#12C660" style={styles.calendarIcon} />
                    <Text>{formattedDate} - {formattedTime}</Text>
                </View>
                {showDelete && (
                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={styles.iconButton} accessibilityLabel="Edit workout" onPress={() => handleEditWorkout(workout.id)}>
                            <Ionicons name="create-outline" size={22} color="#12C660" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton} accessibilityLabel="Delete workout" onPress={() => handleDeleteWorkout(workout.id)}>
                            <Ionicons name="trash-outline" size={22} color="#12C660" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.workoutValuesContainer}>
                <View style={styles.subContainer}>
                    <Ionicons name="time-outline" size={22} color="#12C660" style={styles.durationIcon} />
                    <View style={styles.durationText}>
                        <Text style={styles.durationTextLabel}>Duration</Text>
                        <Text style={styles.workoutValues}>{workout.duration}</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Ionicons name="flame-outline" size={22} color="#12C660" style={styles.durationIcon} />
                    <View style={styles.durationText}>
                        <Text style={styles.durationTextLabel}>Calories</Text>
                        <Text style={styles.workoutValues}>{workout.calories}</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Ionicons name="walk-outline" size={22} color="#12C660" style={styles.durationIcon} />
                    <View style={styles.durationText}>
                        <Text style={styles.durationTextLabel}>Steps</Text>
                        <Text style={styles.workoutValues}>{workout.steps}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.distanceContainer}>
                <Ionicons name="location-outline" size={18} color="#12C660" />
                <Text style={styles.distanceText}>
                    Route tracked{formattedDistance ? ` • ${formattedDistance}` : ''}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 15,

    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    iconButton: {
        padding: 4,
    },
    calendarIcon: {
        marginRight: 8,
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    durationText: {
        flexDirection: 'column',
        gap: 4,
    },
    durationTextLabel: {
        fontWeight: 'bold',
        color: '#757575',
    },
    workoutValuesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    workoutValues: {
        fontSize: 16,
        fontWeight: 'bold',
        // color: '#12C660',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingTop: 10,
        marginTop: 10,
    },
    distanceText: {
        fontWeight: 'bold',
        color: '#0f172a',
    },
});