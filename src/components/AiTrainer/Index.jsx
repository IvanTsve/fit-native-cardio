import React, { useCallback, useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import Greetings from '@/components/Common/Greetings';
import Title from '@/components/Common/Title';
import Action from '@/components/Common/Action';
import { commonStyles } from '@/styles/Common';
import AiChatMessage from '@/components/AiTrainer/AiChatMessage';
import AiQuickPrompts from '@/components/AiTrainer/AiQuickPrompts';
import ChatInput from '@/components/AiTrainer/ChatInput';

const QUICK_PROMPTS = [
  { id: '1', text: 'Plan a 20-min HIIT for today' },
  { id: '2', text: 'How do I warm up before running?' },
  { id: '3', text: 'Suggest a recovery day routine' },
  { id: '4', text: 'Explain heart rate zones simply' },
];

const INITIAL_MESSAGES = [
  {
    id: 'm0',
    role: 'assistant',
    text:
      "Hi — I'm your AI trainer. Ask about workouts, form, recovery, or how to hit your goals. I'll tailor advice to your cardio journey.",
  },
];

export default function Index() {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const pushUserThenAssistant = useCallback((userText) => {
    const userId = `u-${Date.now()}`;
    const replyId = `a-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      { id: userId, role: 'user', text: userText },
      {
        id: replyId,
        role: 'assistant',
        text:
          'Thanks for your question. When your backend or model is connected, full answers will appear here. For now, keep exploring quick prompts or describe your goal below.',
      },
    ]);
  }, []);

  const handleSend = useCallback(
    (text) => {
      pushUserThenAssistant(text);
      requestAnimationFrame(() => scrollRef.current?.scrollToEnd({ animated: true }));
    },
    [pushUserThenAssistant],
  );

  const handleQuickPrompt = useCallback(
    (text) => {
      pushUserThenAssistant(text);
      requestAnimationFrame(() => scrollRef.current?.scrollToEnd({ animated: true }));
    },
    [pushUserThenAssistant],
  );

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ y: 0, animated: true }));
  };

  return (
    <View style={styles.screen}>
      <Greetings
        title="AI Trainer"
        subtitle="Coaching, plans, and answers — built around your cardio"
      />
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[commonStyles.mainContainer, styles.scrollInner]}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        >
          <Title title="Chat" />
          <AiQuickPrompts prompts={QUICK_PROMPTS} onSelect={handleQuickPrompt} />

          <View style={styles.thread}>
            {messages.map((m) => (
              <AiChatMessage key={m.id} role={m.role} text={m.text} />
            ))}
          </View>

          <Text style={styles.hint}>Demo mode — wire your API to enable real replies.</Text>

          <Action
            title="Reset chat"
            onPress={handleResetChat}
            active={false}
            style={styles.resetAction}
          />
        </ScrollView>

        <ChatInput onSend={handleSend} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollInner: {
    paddingBottom: 36,
    gap: 20,
  },
  thread: {
    marginTop: 4,
  },
  hint: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: -4,
  },
  resetAction: {
    alignSelf: 'stretch',
  },
});
