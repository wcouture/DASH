import { LinearGradient } from "expo-linear-gradient";
import { View, TextInput, Text, StyleSheet } from "react-native";

 
export type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

export default function TextInputField(props: InputFieldProps) {
  return (
    <LinearGradient colors={['#363642', '#2c2c36']} style={styles.inputContainer}>
        <TextInput style={styles.answerInput} value={props.value} onChangeText={props.onChangeText}/>
        <View style={styles.inputButton} onTouchStart={props.onSubmit}><Text>{"->"}</Text></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

    inputContainer: {
        position: 'absolute',
        bottom: 100,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        padding: 10,

        width: '100%',

        borderColor: '#58586d',
        borderWidth: 2,
        boxShadow: '0px 4px 5px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: 20,
    },

    answerInput: {
        width: '100%',
        color: '#fff',
        fontSize: 18,
    },

    inputButton: {
        borderColor: '#2e866c',
        borderWidth: 3,
        borderStyle: 'dotted',
        backgroundColor: '#22c573',
        position: 'absolute',
        right: 10,

        width: 30,
        height: 30,

        boxShadow: '0px 2px 5px 2px rgba(0, 0, 0, 0.25)',

        borderRadius: 20,
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});