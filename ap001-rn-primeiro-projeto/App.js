import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React, {useState} from 'react';

export default function App() {

  const [contador, setContador] = React.useState(0)
  return (
    <View style={styles.container}>
      <Text>Clique no botão para começar a contar!!</Text>
      <Text>{contador}</Text>
      <Button
        onPress={() => setContador(contador + 1)}
        title="OK"
        color="#156e84"
/>
    </View>
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
