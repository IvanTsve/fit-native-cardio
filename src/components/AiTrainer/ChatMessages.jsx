import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatMessages({ messages, isTyping }) {
    const scrollRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.scrollToEnd({ animated: true });
        }, 80);
    }, [messages, isTyping]);

    return (
        <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            {messages.map((msg) => (
                <View
                    key={msg.id}
                    style={[
                        styles.row,
                        msg.role === 'user' ? styles.rowUser : styles.rowAi,
                    ]}
                >
                    {msg.role === 'ai' && (
                        <View style={styles.avatarWrapper}>
                            <Ionicons name="flash" size={16} color="#fff" />
                        </View>
                    )}
                    <View
                        style={[
                            styles.bubble,
                            msg.role === 'user' ? styles.bubbleUser : styles.bubbleAi,
                        ]}
                    >
                        <Text
                            style={[
                                styles.messageText,
                                msg.role === 'user' ? styles.textUser : styles.textAi,
                            ]}
                        >
                            {msg.text}
                        </Text>
                    </View>
                </View>
            ))}

            {isTyping && (
                <View style={[styles.row, styles.rowAi]}>
                    <View style={styles.avatarWrapper}>
                        <Ionicons name="flash" size={16} color="#fff" />
                    </View>
                    <View style={[styles.bubble, styles.bubbleAi, styles.typingBubble]}>
                        <ActivityIndicator size="small" color="#12C660" />
                        <Text style={styles.typingText}>AI Trainer is thinking…</Text>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
    },
    rowUser: {
        justifyContent: 'flex-end',
    },
    rowAi: {
        justifyContent: 'flex-start',
    },
    avatarWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#12C660',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    bubble: {
        maxWidth: '75%',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 18,
    },
    bubbleUser: {
        backgroundColor: '#12C660',
        borderBottomRightRadius: 4,
    },
    bubbleAi: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 4,
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.07)',
    },
    messageText: {
        fontSize: 15,
        lineHeight: 21,
    },
    textUser: {
        color: '#fff',
    },
    textAi: {
        color: '#0f172a',
    },
    typingBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 12,
    },
    typingText: {
        fontSize: 13,
        color: '#9ca3af',
    },
});
