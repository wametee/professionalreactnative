// Props or properties are data that is passed to child components in a React application.
// React components render UI elements based on their props and their internal state,
// THe props that a component takes (and uses) defines how it can be controlled from the outside

// Proptypes
// The prop-types package allows you to add runtime type checking to your component that ensures the types of the props passed to the component are correct.
// For instance, if you don't pass a name or isYummy prop to the component below it will throw an error in development mode.
// In production mode the prop type checks are not done
// Defining propTypes can make your component more readable and maintainable

// React and React Native imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View } from 'react-native';

// Importing styles from a separate file for better separation of concerns
import styles from './styles';

// Recipe Component
// This component displays a recipe's name and whether it's marked as "yummy".
// It utilizes PropTypes to ensure strict type checking of props during development,
// enhancing the reliability and maintainability of the codebase.

class Recipe extends Component {
    // PropTypes define the types and requirements for props passed to this component.
    // This ensures proper usage and helps catch potential bugs during development.
    static propTypes = {
        name: PropTypes.string.isRequired, // The name of the recipe, required and must be a string.
        isYummy: PropTypes.bool.isRequired, // Indicates if the recipe is considered yummy, required and must be a boolean.
    };

    render() {
        return (
            <View className={styles.container}>
                {/* Display the recipe name */}
                <Text>{this.props.name}</Text>
                {/* Conditionally render text based on the 'isYummy' prop */}
                {this.props.isYummy ? (
                    <Text>THIS RECIPE IS YUMMY</Text>
                ) : null}
            </View>
        );
    }
}

// Register the Recipe component with the AppRegistry.
// This is necessary to render the component in a React Native app.
AppRegistry.registerComponent('Recipe', () => Recipe);
