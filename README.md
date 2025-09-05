# Echo


A modern and intuitive mobile music player application built with Expo and React Native, designed to provide a seamless audio experience on your device.

## Table of Contents

-   [About The Project](#about-the-project)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Installation Guide](#installation-guide)
-   [Project Structure](#project-structure)
-   [License](#license)

## About The Project

Echo is a sleek and user-friendly mobile application that allows you to manage and play your favorite audio tracks. Built on the robust Expo and React Native framework, it offers a responsive and smooth experience across different mobile platforms. With a focus on simplicity and performance, Echo provides essential music playback features, including a dynamic song list and the ability to mark tracks as favorites.

## Features

-   **Seamless Music Playback**: Enjoy your favorite tracks with a smooth and responsive player, supporting various audio formats.
-   **Dynamic Song List**: Easily browse through a curated collection of audio files available within the application.
-   **Individual Song Pages**: Access detailed views for each song, potentially offering specific playback controls or information.
-   **Favorites Management**: Quickly mark and access your most loved songs, creating a personalized listening experience.
-   **Modern User Interface**: A clean, aesthetically pleasing, and intuitive design thanks to NativeWind and Tailwind CSS.

## Tech Stack

Echo is built with a powerful and modern set of technologies:

-   **Framework**: [React Native](https://reactnative.dev/)
-   **Platform**: [Expo](https://expo.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   **Styling**: [NativeWind](https://www.nativewind.dev/), [Tailwind CSS](https://tailwindcss.com/)
-   **State Management**: Custom local store (`libs/store.js`) for application state.

## Installation Guide

To get a local copy of Echo up and running, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js**: [LTS version recommended](https://nodejs.org/en)
-   **npm** or **Yarn**: Node.js package manager
-   **Expo CLI**: Install globally using npm or Yarn:
    ```bash
    npm install -g expo-cli
    # OR
    yarn global add expo-cli
    ```

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/Echo.git
    cd Echo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Start the Expo development server:**

    ```bash
    npx expo start
    # OR
    yarn expo start
    ```

4.  **Run the app:**

    *   **On a physical device:** Scan the QR code displayed in your terminal or browser with the [Expo Go app](https://expo.dev/client).
    *   **On an Android emulator:** Press `a` in the terminal.
    *   **On an iOS simulator:** Press `i` in the terminal (macOS required).
    *   **In a web browser:** Press `w` in the terminal.

## Project Structure

The repository follows a clean and organized structure:

```
.
├── .gitignore
├── .vscode/
│   └── settings.json
├── README.md
├── app.json
├── app/
│   ├── [id]/
│   │   └── index.tsx             # Dynamic route for individual song details
│   ├── _layout.tsx               # Root layout for navigation
│   ├── favourites.tsx            # Screen for favorite songs
│   ├── global.css                # Global styles for NativeWind/Tailwind
│   └── index.tsx                 # Main screen, likely showing all songs
├── assets/
│   ├── audio/                    # Contains audio files (.mp3)
│   │   ├── Be Intehaan.mp3
│   │   ├── Chahun Main Yaa Na.mp3
│   │   ├── Desi Kalakaar.mp3
│   │   ├── Im still standing.mp3
│   │   ├── Song-5.mp3
│   │   ├── Song-Muskurane.mp3
│   │   └── song7.mp3
│   ├── fonts/                    # Custom fonts
│   │   └── SpaceMono-Regular.ttf
│   └── images/                   # Application images and icons
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash-icon.png
├── babel.config.js               # Babel configuration
├── eslint.config.js              # ESLint configuration
├── libs/
│   ├── songs.js                  # Utility for managing song data
│   └── store.js                  # Simple global state management
├── metro.config.js               # Metro bundler configuration
├── nativewind-env.d.ts           # TypeScript type definitions for NativeWind
├── package-lock.json             # npm lock file
├── package.json                  # Project dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## License

This project is licensed under the MIT License - see the `LICENSE` file (if available in the repository root) for details.

---
-- made by docify --
