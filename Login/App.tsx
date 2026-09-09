
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "./_component/MainScreen";
import ViewDetails from "./_component/ViewDetails";
import ListSkills from "./_component/ListSkills";
import { NavigationContainer } from "@react-navigation/native";




// My tab navigator has these routes, and here's what each route expects as parameters
type TabParamList = {
    Home: undefined;
  ViewDetails: {
    NameSend: string;
    EmailSend: string;
    PassSend: string;
    GenreSend: string;
  };
  ListSkills: undefined;
};

// create a navigation system that can display several screens as tabs
const tab = createMaterialTopTabNavigator<TabParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={{ tabBarStyle: { marginTop: 30 } }}>
        <tab.Screen name="Home" component={MainScreen} />
        <tab.Screen name="ViewDetails" component={ViewDetails} />
        <tab.Screen name="ListSkills" component={ListSkills} />
      </tab.Navigator>
    </NavigationContainer>
  );
}







