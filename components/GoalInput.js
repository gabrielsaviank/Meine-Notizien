// Imports
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  //Input Text Button Settings.
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  //Cancel button settings.
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  // What you see. 
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Hoje vou..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Adicionar" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancelar" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// CSS or Styling
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60%',
    alignItems: "center"
  },
  button: {
    width: '70%',
    padding: 20, 
    borderRadius: 5
  }
});

export default GoalInput; 

// Modal is to create the slide animation when you're Adding a Task