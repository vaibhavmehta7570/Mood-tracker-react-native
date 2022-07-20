import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { ButtonTabsNavigator } from './screens/BottomTabs.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Something } from './screens/something.screen';
// import { PostOrTask } from './screens/postOrTask.screen';

const Stack = createNativeStackNavigator();
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Post" component={Something} />
      </Stack.Navigator>
      {/* <ButtonTabsNavigator /> */}
    </NavigationContainer>
  );
};
