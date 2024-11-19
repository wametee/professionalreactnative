// Import necessary libraries from React and React Native
import React from 'react';
import { View, Text } from 'react-native';

// Class-based component to demonstrate rendering multiple variables
class FullName extends React.Component {
    // The render method is where the component's UI is defined
    render() {
        // Declare variables for first name and last name
        const firstName = 'Joseph'; // Example: static first name
        const lastName = 'Wamiti'; // Example: static last name

        // Return the UI layout, combining the variables within a Text component
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ padding: 10 }}> {/* Add basic padding for better UI alignment */}
                <Text>My full name is {firstName} {lastName}</Text>
            </View>
        );
    }
}

// Export the component for use in other parts of the application
export default FullName;
