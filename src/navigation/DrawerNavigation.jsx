import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./StackNavigation";
import SideMenu from "../components/SideMenu";

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerStack.Navigator drawerContent={()=><SideMenu />} >
      <DrawerStack.Screen
        name="StackScreens"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
    </DrawerStack.Navigator>
  );
};
export default DrawerNavigation;
const styles = StyleSheet.create({});
