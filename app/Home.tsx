import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import TextBubble from '../components/TextBubble';
import TextInputField from '../components/TextInputField';
import { router, useFocusEffect } from 'expo-router';

export default function App() {
  const [textBubbles, setTextBubbles] = useState([]);
  const [inputText, setInputText] = useState("");

  const hasMatchedCouple: boolean = false;

  useFocusEffect(() => {
    if (!hasMatchedCouple) {
      router.push("/FindMatch");
    }
  });

  const AddTextBubble = (text) => {
    setTextBubbles([...textBubbles, text]);
    setInputText("");
    router.push("/FindMatch");
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: 20, paddingBottom: 0, marginBottom: 20 }}>
        {textBubbles.map((bubble, index) => (
          <TextBubble key={index} text={bubble} isUser={index % 2 === 0} />
        ))}
      </View>
      
      <TextInputField value={inputText} onChangeText={setInputText} onSubmit={() => { AddTextBubble(inputText); }}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

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
});
