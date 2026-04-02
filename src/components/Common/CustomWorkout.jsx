import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import MainButton from '@/components/Common/MainButton';
import { commonStyles } from '@/styles/Common';

const INITIAL_FORM = {
    name: '',
    durationMinutes: '',
    calories: '',
    steps: '',
    distanceKm: '',
};

export default function CustomWorkout() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [latestWorkout, setLatestWorkout] = useState(null);

    const fields = useMemo(
        () => [
            { key: 'name', label: 'Workout name', placeholder: 'Morning cardio', keyboardType: 'default' },
            { key: 'durationMinutes', label: 'Duration (minutes)', placeholder: '30', keyboardType: 'number-pad' },
            { key: 'calories', label: 'Calories', placeholder: '300', keyboardType: 'number-pad' },
            { key: 'steps', label: 'Steps', placeholder: '5000', keyboardType: 'number-pad' },
            { key: 'distanceKm', label: 'Distance (km)', placeholder: '3.5', keyboardType: 'decimal-pad' },
        ],
        [],
    );

    const handleFieldChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSaveStats = () => {
        const name = form.name.trim();
        const durationMinutes = Number(form.durationMinutes);
        const calories = Number(form.calories);
        const steps = Number(form.steps);
        const distanceKm = Number(form.distanceKm);

        if (!name) {
            Alert.alert('Missing workout name', 'Please enter a workout name.');
            return;
        }

        if (!Number.isFinite(durationMinutes) || durationMinutes <= 0) {
            Alert.alert('Invalid duration', 'Duration must be a number greater than 0.');
            return;
        }

        if (!Number.isFinite(calories) || calories < 0 || !Number.isFinite(steps) || steps < 0 || !Number.isFinite(distanceKm) || distanceKm < 0) {
            Alert.alert('Invalid stats', 'Calories, steps, and distance must be valid positive numbers.');
            return;
        }

        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 10);
        const formattedTime = now.toTimeString().slice(0, 8);

        setLatestWorkout({
            id: Date.now(),
            name,
            duration: `${durationMinutes} minutes`,
            calories,
            steps,
            distance: distanceKm,
            date: formattedDate,
            time: formattedTime,
        });

        setForm(INITIAL_FORM);
        Alert.alert('Stats saved', 'Your workout stats were added successfully.');
    };

    return (
        <KeyboardAvoidingView
            style={styles.keyboardArea}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
        >
            <View style={commonStyles.mainContainer}>
                    <Text style={styles.subtitle}>Log your workout numbers to keep your dashboard up to date.</Text>
                    <View style={styles.fieldsWrapper}>
                        {fields.map((field) => (
                            <View key={field.key} style={styles.field}>
                                <Text style={styles.label}>{field.label}</Text>
                                <TextInput
                                    value={form[field.key]}
                                    onChangeText={(text) => handleFieldChange(field.key, text)}
                                    placeholder={field.placeholder}
                                    placeholderTextColor="#9ca3af"
                                    keyboardType={field.keyboardType}
                                    style={styles.input}
                                />
                            </View>
                        ))}
                    </View>

                    <MainButton
                        text="Save Stats"
                        onPress={handleSaveStats}
                        styles={{
                            buttonContainer: [commonStyles.buttonContainer, styles.saveButton],
                            buttonText: commonStyles.buttonText,
                        }}
                    />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardArea: {
        flex: 1,
    },
    page: {
        paddingBottom: 40,
    },
    container: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        gap: 25,
        marginTop: 40,
    },
    subtitle: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 20,
    },
    fieldsWrapper: {
        gap: 12,
    },
    field: {
        gap: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0f172a',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        color: '#111827',
        backgroundColor: '#f8fafc',
    },
    saveButton: {
        marginTop: 4,
    },
    previewSection: {
        gap: 12,
    },
});