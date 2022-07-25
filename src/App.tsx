import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { ButtonTabsNavigator } from './screens/BottomTabs.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonTabsNavigator } from './screens/BottomTabs.navigator';
import { PostOrTask } from './screens/PostOrTask.screen';
import { UserHome } from './screens/UserHome.screen';
import { AppProvider } from './App.provider';
// import { PostOrTask } from './screens/postOrTask.screen';

const Stack = createNativeStackNavigator();
export const App: React.FC = () => {
  // const [user_Id, setUserId] = useState(1);
  // const data = {
  //   user_Id,
  //   setUserId,
  // };
  return (
    <NavigationContainer>
      {/* <userContext.Provider value={data}> */}
      <AppProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={ButtonTabsNavigator} />
          <Stack.Screen name="PostOrTask" component={PostOrTask} />
          <Stack.Screen name="UserHome" component={UserHome} />
        </Stack.Navigator>
        {/* </userContext.Provider> */}
      </AppProvider>
    </NavigationContainer>
  );
};
