import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Intro from './src/screens/Intro';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';


const RootContent =()=>{
  return(
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}


export default function App() {
  return (
  <RootContent />
  );
}

const styles = StyleSheet.create({

});
