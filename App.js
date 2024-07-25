import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon ,AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
   <>
   <StackNavigator/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
