# 🏃 Fit Native Cardio

A modern **React Native** fitness tracking app built with **Expo**, featuring an AI trainer chat, workout analytics, and a clean green-accented UI — all in one shell ready for production wiring.

---

<!-- ## 📱 Screenshots

<p align="center">
  <img src="assets/preview/4FC779F3-A18E-4F8F-98A6-3DA6E1A3E168_1_105_c.jpeg" width="18%" />
  <img src="assets/preview/5E99B4ED-5A0C-4063-A812-86D0AAA6AFEA_1_105_c.jpeg" width="18%" />
  <img src="assets/preview/636A21E0-73A7-4CF8-B8B1-B9BF7C7C2A62_1_105_c.jpeg" width="18%" />
  <img src="assets/preview/7238A1EE-2277-4353-AADD-FE09E1F60A49_1_105_c.jpeg" width="18%" />
  <img src="assets/preview/7B93123E-CAAC-43BD-9959-42E1FE790F75_1_105_c.jpeg" width="18%" />
  <img src="assets/preview/F4638E6B-3852-4896-B570-0F5E92516869_1_105_c.jpeg" width="18%" />
</p> -->

---

## ✨ Features

| Screen | What it does |
|--------|-------------|
| **Home** | Time-based greeting, today's progress ring, key stats, and recent workouts at a glance |
| **Workouts** | Searchable list of all workouts with edit / delete actions |
| **AI Trainer** | Chat interface with quick-prompt shortcuts — ready to be wired to any LLM API |
| **Analytics** | Weekly / monthly bar charts for calories burned and workout duration (`react-native-gifted-charts`) |
| **Profile** | Personal info, weekly goal tracker, and app settings |

---

## 🛠 Tech Stack

| Layer | Library / Tool |
|-------|---------------|
| Framework | [Expo](https://expo.dev) ~54 |
| UI | React Native 0.81.5 + React 19 |
| Navigation | [React Navigation](https://reactnavigation.org) — bottom tabs + native stack |
| Charts | [react-native-gifted-charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts) |
| Gradients | expo-linear-gradient |
| Dates | [dayjs](https://day.js.org) |
| Icons | [@expo/vector-icons](https://icons.expo.fyi) (Ionicons) |
| Language | JavaScript (JSX) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`
- iOS Simulator / Android Emulator **or** the [Expo Go](https://expo.dev/go) app on your device

### Install

```bash
git clone https://github.com/YOUR_USERNAME/fit-native-cardio.git
cd fit-native-cardio
npm install
```

### Run

```bash
# Start Expo dev server (scan QR with Expo Go)
npm start

# Open on a connected iOS simulator
npm run ios

# Open on a connected Android emulator / device
npm run android

# Open in the browser
npm run web
```

---

## 📁 Project Structure

```
fit-native-cardio/
├── App.js                      # Root component, global styles
├── index.js                    # Expo entry point
├── app.json                    # Expo configuration
└── src/
    ├── navigation/
    │   ├── RootNavigator.jsx   # Auth guard → MainTabs or AuthNavigator
    │   ├── MainTabs.jsx        # Bottom tab bar (5 tabs)
    │   └── AuthNavigator.jsx   # Login / Register stack
    ├── screens/                # Thin screen wrappers
    ├── components/
    │   ├── Home/
    │   ├── Workouts/
    │   ├── AiTrainer/          # Chat UI components
    │   ├── Analytics/          # Chart components
    │   ├── Profile/
    │   └── Common/             # Shared UI primitives
    ├── services/
    │   └── workouts.js         # Mock workout data
    └── styles/
        └── Common.jsx          # Global shared styles
```

---

## 🤖 AI Trainer

The **AI Trainer** screen is a fully-built chat UI complete with quick-prompt shortcuts and message bubbles. It is currently in **demo mode** — the assistant replies are placeholder responses. To activate it, wire `src/components/AiTrainer/Index.jsx` to any LLM API (OpenAI, Gemini, etc.) inside the `handleSend` handler.

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Brand green | `#12C660` |
| Active tint | `#0ea653` |
| App background | `#c3c4c7` |
| Status bar | Hidden |
| Orientation | Portrait |

---

## 🔮 Roadmap

- [ ] Connect real workout data source / REST API
- [ ] Implement authentication (Login / Register screens are scaffolded)
- [ ] Wire AI Trainer to an LLM API
- [ ] Add workout creation flow
- [ ] Persist data with AsyncStorage or a backend

---

## 📄 License

This project is open source. Feel free to fork, extend, and build on top of it.
