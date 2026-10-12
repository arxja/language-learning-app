# Language Learning App

A Duolingo-inspired language learning mobile app built with Expo, React Native, TypeScript, and Expo Router.

This project is designed as a practical learning app for building a modern AI-powered language experience with onboarding, lesson flows, progress tracking, and AI teacher features.

## Features

- Onboarding and language selection
- Learning dashboard and lesson cards
- Lesson detail and progress flow
- AI teacher / tutor experience
- Chat and video-oriented learning concepts
- Zustand-powered local app state
- NativeWind styling for a polished mobile UI

## Tech Stack

- Expo + React Native
- TypeScript
- Expo Router
- NativeWind
- Zustand
- AsyncStorage
- Clerk
- Stream / video integration
- Vision agent support for AI learning experiences

## Project Structure

```txt
.
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   ├── lesson/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── language-select.tsx
│   └── OnBoarding.tsx
├── src/
│   ├── api/
│   ├── app/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── store/
│   ├── types/
│   └── global.css
├── vision-agent/
├── assets/
├── app.json
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Start the app

```bash
pnpm start
```

3. Run on a simulator or device

```bash
pnpm run android
pnpm run ios
pnpm run web
```

## Useful Scripts

```bash
pnpm run start
pnpm run android
pnpm run ios
pnpm run web
pnpm run lint
pnpm run typecheck
```

## Notes

- The app uses file-based routing through Expo Router.
- The content and lesson data are kept in the data folder to make the project easy to extend and teach.
- Backend and secure services such as Clerk/Stream token generation should stay server-side and never expose secrets in the mobile app.

## Credits & Attribution

This project incorporates concepts and code originally developed by **JavaScript Mastery** as part of their React Native tutorial series. Their work is used here with attribution, in accordance with open-source best practices.

- Original repository: [adrianhajdin/](https://github.com/adrianhajdin/react-native-lingua)
- Author: [@adrianhajdin](https://github.com/adrianhajdin)

Any modifications, optimizations, or additional features are my own and do not reflect on the original author.

---

## License

MIT
