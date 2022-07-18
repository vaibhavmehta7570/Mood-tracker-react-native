import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { StyleSheet, View } from "react-native"
import { ButtonTabsNavigator } from "./screens/BottomTabs.navigator"
export const App:React.FC=()=>{

  return <NavigationContainer>
    <ButtonTabsNavigator/>
  </NavigationContainer>
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"teal"
  }
})