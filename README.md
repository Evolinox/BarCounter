# BarCounter

BarCounter is a self-service bar management app that tracks drink consumption, making it easy for patrons to manage and settle their tabs independently. Ideal for self-service bars, BarCounter records each drink taken by users, allowing staff and customers to see real-time beverage counts and total consumption. With BarCounter, venues can offer a streamlined, hassle-free experience for both guests and bar staff, ensuring accurate drink tracking and efficient payments.

## Features
- Created with Vue.js and Tauri.
- Real-time tracking of drink selections and consumption.
- User-friendly interface for selecting a new drink.

## Structure
- `src`: Vue.js Root Directory
    - `assets`: assets used in the app
    - `components`: Vue.js components for frontend
    - `lib`: utility functions
    - `views`: Vue.js frontend
- `src-tauri`: Tauri Root Directory

## Developing
If you want to develop additional features, you can do so by cloning this repository. Then open it in your Code-Editor (VS Code or WebStorm as an example) and run the following commands
```
// First, you need to install the node packages
npm install

// Then you can start the dev app
npm run tauri dev
```

## Build
To build the app, simply run the following command in your terminal
```bash
npm run tauri build
```