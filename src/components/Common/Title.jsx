import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

export default function Title({title}) {
    return (
        <View>
            <Text style={[commonStyles.sectionTitle, styles.title]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginTop: 20,
    },
});