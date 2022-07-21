import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Post } from './Post.screen';
import { Task } from './Task.screen';
import { AllUsers } from './AllUsers.screen';

const BottomTabs = createBottomTabNavigator();

export const ButtonTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="AllUsers" component={AllUsers} />
      <BottomTabs.Screen name="Posts" component={Post} />
      <BottomTabs.Screen name="Tasks" component={Task} />
    </BottomTabs.Navigator>
  );
};
