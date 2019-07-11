# React-Native-Admob-integration-example
How to integrate Admob in react-native, a full sample project 

React-Native version info
{
  "name": "admobBanner",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "jsc-android": "241213.1.0",
    "react": "^16.8.6",
    "react-native": "^0.59.0",
    "react-native-admob": "^2.0.0-beta.5"
  },
  "devDependencies": {
    "@babel/core": "^7.5.0",
    "@babel/runtime": "^7.5.2",
    "@react-native-community/eslint-config": "0.0.3",
    "babel-jest": "24.8.0",
    "eslint": "6.0.1",
    "jest": "24.8.0",
    "metro-react-native-babel-preset": "0.54.1",
    "react-test-renderer": "16.8.6"
  },
  "jest": {
    "preset": "react-native"
  }
}

System Requirements
Windows 8/10
Mac
Linux Mint, Ubuntu

1.Intall admob Package 
npm i react-native-admob@next

2.link downloaded package 
react-native link <package-name>

Update your app buil.gradle file 
implementation project(':react-native-admob')

to

implementation project(':RNAdMob')

and project settings.gradle
include ':react-native-admob'
project(':react-native-admob').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-admob/android')

to

include ':RNAdMob'
project(':RNAdMob').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-admob/android')


You may get build time errors  module 'schedule' not found in haste map
for this 
add below to your package.json after that run npm install react@latest
    "@babel/core": "^7.5.0",
    "@babel/runtime": "^7.5.2",


