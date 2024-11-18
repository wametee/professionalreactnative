//Props are used to transfer data from parent to child component. Props are read only. Child component can only get
//the props passed from parent using this.props.keyName. Using props one can make his component reusable.

// Importing React and necessary React Native components
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

// Child Component: Greeting
// This component displays a personalized greeting message based on the `name` prop.
// It demonstrates how props can be passed from a parent to a child component.
class Greeting extends Component {
    render() {
        // Access the `name` prop passed from the parent component
        const { name } = this.props;

        return (
            <Text style={styles.greetingText}>
                {/* Display a dynamic greeting message */}
                Hello {name}!
            </Text>
        );
    }
}

// Parent Component: LotsOfGreetings
// This component manages multiple `Greeting` components and demonstrates how
// to pass different props to each instance of the child component.
class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Pass the `name` prop to each `Greeting` component */}
                <Greeting name="Rexxar" />
                <Greeting name="Jaina" />
                <Greeting name="Valeera" />
            </View>
        );
    }
}

// Stylesheet for consistent and clean styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4', // Light background for better readability
    },
    greetingText: {
        fontSize: 20, // Font size for better visibility
        marginVertical: 8, // Add vertical spacing between greetings
        color: '#333', // Darker text color for better contrast
    },
});

// Registering the main component with AppRegistry
// `LotsOfGreetings` becomes the root component of the app.
AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);


// https://reactnative.dev/docs/props.html

//Using props one can make his component generic. For example, you have a Button component. You can pass
//diﬀerent props to that component, so that one can place that button anywhere in his view.


