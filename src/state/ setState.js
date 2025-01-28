import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/*
Section 6.1: setState
To change the view in your application, you can use setState - this will re-render your component and any of its child components.
setState performs a shallow merge between the new and previous state and triggers a re-render of the component.

setState takes either a key-value object or a function that returns a key-value object.

Key-Value Object Example:
this.setState({myKey: 'myValue'});

Function Example:
Using a function is useful for updating a value based on the existing state or props.
this.setState((previousState, currentProps) => {
  return {
    myInteger: previousState.myInteger + 1
  };
});

You can also pass an optional callback to setState that will be fired when the component has re-rendered with the new state:
this.setState({myKey: 'myValue'}, () => {
  // Component has re-rendered... do something amazing!
});
*/

// Parent component that manages state
export default class MyParentComponent extends Component {
  constructor(props) {
    super(props);
    // Initial state with an integer value
    this.state = {
      myInteger: 0
    };
  }

  // Function to generate a random integer and update state
  getRandomInteger() {
    const randomInt = Math.floor(Math.random() * 100);
    this.setState({
      myInteger: randomInt
    });
  }

  // Function to increment the integer by 1 using setState with previous state
  incrementInteger() {
    this.setState((previousState) => {
      return {
        myInteger: previousState.myInteger + 1
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Parent Component Integer: {this.state.myInteger}</Text>
        {/* Passing state value as a prop to the child component */}
        <MyChildComponent myInteger={this.state.myInteger} />
        {/* Buttons to trigger state updates */}
        <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
        <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)} />
      </View>
    );
  }
}

// Child component that receives props from parent
class MyChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {/* Displaying the integer received from the parent component */}
        <Text>Child Component Integer: {this.props.myInteger}</Text>
      </View>
    );
  }
}

// Reusable Button component
class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#444',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  }
});

// Registering the main component
AppRegistry.registerComponent('MyApp', () => MyParentComponent);