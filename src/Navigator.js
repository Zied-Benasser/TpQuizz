import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizSelectionScreen from './screens/QuizSelectionScreen';
import QuizScreen from './screens/QuizzScreen';
import ResultScreen from './screens/ResultScreen';
import AllScoresScreen from './screens/AllScoresScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackAppNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="QuizSelection" component={QuizSelectionScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export function BottomTab() {

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" color={color} size={26} />
        )
      }} />
      <Tab.Screen name="StackSelection" component={StackAppNavigator} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Ionicons name="help-outline" color={color} size={26} />
        ),
        tabBarLabel: 'Quizz',
      }} />
      <Tab.Screen name="AllScores" component={AllScoresScreen} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Ionicons name="book-outline" color={color} size={26} />
        ),
        tabBarLabel: 'Scores'
      }} />
    </Tab.Navigator>
  );
}

export default StackAppNavigator;