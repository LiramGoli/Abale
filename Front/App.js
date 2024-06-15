import { SafeAreaView, StyleSheet, View } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from './src/utils/GlobalStyles';
export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar backgroundColor="#0A0A2A" barStyle="bright-content" />
      <DashboardScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
