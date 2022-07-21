import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { ButtonTabsNavigator } from './screens/BottomTabs.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonTabsNavigator } from './screens/BottomTabs.navigator';
import { PostOrTask } from './screens/PostOrTask.screen';
import { UserHome } from './screens/UserHome.screen';
// import { PostOrTask } from './screens/postOrTask.screen';

const Stack = createNativeStackNavigator();
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={ButtonTabsNavigator} />
        <Stack.Screen name="PostOrTask" component={PostOrTask} />
        <Stack.Screen name="UserHome" component={UserHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
