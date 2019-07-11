# React-Native-Admob-integration-example
How to integrate Admob in react-native, a full sample project 

React-Native version info

    "react": "^16.8.6",
    "react-native": "^0.59.0",
    "react-native-admob": "^2.0.0-beta.5"
 
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


