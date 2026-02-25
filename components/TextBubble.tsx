import { StyleSheet, Text, View } from 'react-native';

export default function TextBubble({ text, isUser }) {
  return (
    <View style={[isUser ? styles.userBubble : styles.otherBubble, styles.textBubble]}>
      <Text style={{ color: '#fff' }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#5d5dc7',
    color: '#fff',
  },

  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#2c2c36',
    color: '#fff',
  },

  textBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
});