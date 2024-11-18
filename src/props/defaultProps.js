// Importing necessary libraries and components from React Native
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

// Example Component: Demonstrates defaultProps
// This component displays a name passed via props or falls back to a default value if none is provided.
class Example extends Component {
    render() {
        // Access the `name` prop, which could be explicitly passed or use the default value
        const { name } = this.props;

        return (
            <View style={styles.container}>
                {/* Display the name prop */}
                <Text style={styles.textStyle}>Hello, {name}!</Text>
            </View>
        );
    }
}

// Setting default props for the `Example` component
// If the parent component doesn't pass the `name` prop, "John" will be used as the default.
Example.defaultProps = {
    name: 'John',
};

// Stylesheet for consistent styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef6fc', // Subtle background color for better contrast
    },
    textStyle: {
        fontSize: 18, // Comfortable font size for text
        color: '#333', // Dark text color for readability
        fontWeight: 'bold', // Emphasized text
    },
});

// Registering the main component with AppRegistry for rendering
AppRegistry.registerComponent('ExampleApp', () => Example);
