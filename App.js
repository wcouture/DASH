import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Open up App.js to start working on your app!</Text>
      <StatusBar hidden={true} />
      
      <LinearGradient colors={['#363642', '#2c2c36']} style={styles.inputContainer}>
        <View style={styles.inputButton}><Text>{">"}</Text></View>
        <TextInput style={styles.answerInput}/>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#1d1d24',
    alignItems: 'center',
  },

  questionText: {
    color: '#fff',
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: '#3b3b4b',
    borderBottomWidth: 1,
  },

  answerInput: {
    margin: 5,
    color: '#fff',
    fontSize: 18,
  },
  
  inputContainer: {
    position: 'absolute',
    bottom: 100,

    width: '100%',

    borderColor: '#58586d',
    borderWidth: 2,
    boxShadow: '0px 4px 5px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
  },

  inputButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,

    borderRadius: 20,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
