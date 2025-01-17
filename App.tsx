import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Intro from "./src/screens/Intro";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast, { BaseToast } from "react-native-toast-message";
import { colors } from "./src/constants";

const RootContent = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

const toastConfig = {
  success: (props: any) => {
    return ( // return ifadesi eklenmeli
      <BaseToast
        {...props}
        style={{ borderLeftColor: colors.designColor }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ fontSize: 15, fontWeight: "500" }} // 'fontsize' yerine 'fontSize'
      />
    );
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <RootContent />
      <Toast config={toastConfig} position="bottom" visibilityTime={2000} />
    </Provider>
  );
}

const styles = StyleSheet.create({});
