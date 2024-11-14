import { View,Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Intro from "./screens/intro";
import ContactList from "./screens/contact";
import AddList from "./screens/addlist";

const Stack = createStackNavigator()

const App=()=>{
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="contactList" screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Intro" component={Intro}/>
      <Stack.Screen name="contactList" component={ContactList}/>
      <Stack.Screen name="Addlist" component={AddList}/>
    </Stack.Navigator>
  </NavigationContainer>
)

}

export default App;