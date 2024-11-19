import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

// Dish Component
// Demonstrates the use of multiple prop types with PropTypes.oneOfType
class Dish extends Component {
    // Define prop types using `PropTypes.oneOfType`
    static propTypes = {
        name: PropTypes.oneOfType([
            PropTypes.string, // `name` can be a string
            PropTypes.shape({ // Or `name` can be an object with specific fields
                title: PropTypes.string.isRequired, // Title of the dish (required)
                author: PropTypes.string, // Optional author of the dish
            }),
        ]).isRequired, // `name` is mandatory, must be either type
    };

    render() {
        // Destructuring `name` from `this.props`
        // Purpose:
        // - Simplifies access to the `name` prop by avoiding repetitive `this.props.name` references.
        // - Improves readability and makes the code cleaner.
        const { name } = this.props;

        return (
            <View style={styles.container}>
                {/* Check the type of `name` and render accordingly */}
                <Text style={styles.text}>
                    {typeof name === 'string'
                        ? name // If `name` is a string, display it directly
                        : `${name.title} by ${name.author || 'Unknown Author'}`} {/* Handle object with optional author */}
                </Text>
            </View>
        );
    }
}

// Styles for the Dish component
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default Dish;
