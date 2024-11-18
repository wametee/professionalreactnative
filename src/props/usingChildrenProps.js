import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

class DishDetails extends Component {
    // Define PropTypes for the DishDetails component
    static propTypes = {
        isDelicious: PropTypes.bool.isRequired, // Boolean indicating if the dish is delicious
        children: PropTypes.node, // `children` prop for flexible content
    };

    render() {
        const { isDelicious, children } = this.props;

        return (
            <View style={styles.container}>
                {/* Render children passed from parent */}
                {children}

                {/* Conditionally render if the dish is delicious */}
                {isDelicious && (
                    <Text style={styles.deliciousText}>THIS DISH IS DELICIOUS</Text>
                )}
            </View>
        );
    }
}

// Styles for the DishDetails component
const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        backgroundColor: '#fdfdfd',
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    deliciousText: {
        marginTop: 10,
        color: '#e67e22',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DishDetails;
