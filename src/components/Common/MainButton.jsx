import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function MainButton({styles,text,onPress = () => {}}) {
    return (
        <View>
            <TouchableOpacity style={[styles?.buttonContainer]} onPress={onPress}>
                <Text style={[styles?.buttonText]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}
