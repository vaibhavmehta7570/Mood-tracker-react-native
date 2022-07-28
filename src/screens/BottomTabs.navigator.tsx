import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Post } from './Post.screen';
import { Task } from './Task.screen';
import { AllUsers } from './AllUsers.screen';
import { HomeIcon, PostsIcon, TaskIcons } from '../components/icons';

const BottomTabs = createBottomTabNavigator();

export const ButtonTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Users') {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === 'Posts') {
            return <PostsIcon color={color} size={size} />;
          }
          if (route.name === 'Tasks') {
            return <TaskIcons color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen name="Users" component={AllUsers} />
      <BottomTabs.Screen name="Posts" component={Post} />
      <BottomTabs.Screen name="Tasks" component={Task} />
    </BottomTabs.Navigator>
  );
};
