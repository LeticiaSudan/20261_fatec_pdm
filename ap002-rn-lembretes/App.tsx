import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React from 'react';

//criei um tipo de dado, como se fosse uma classe
interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {

  const [lembrete, setLembrete] = React.useState('')
  const [lembretes, setLembretes] = React.useState<Lembrete[]>([])

  const adicionar = () => {
    const novoLembrete : Lembrete = {id: Date.now().toString(), texto: lembrete}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um lembrete"
        value={lembrete}
        onChangeText={text => setLembrete(text)}
      />
      <Pressable style={styles.button}>
        <Text 
          style={styles.buttonText}
        >
          Salvar Lembrete
        </Text>

      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  }
});
