import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import lighTeme from './src/lightTheme';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lighTeme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
