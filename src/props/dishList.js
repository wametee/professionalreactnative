import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Dish from './Dish';

const DishList = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Example of passing `name` as a string */}
            <Dish name="Pizza Margherita" />

            {/* Example of passing `name` as an object */}
            <Dish name={{ title: 'Sushi Platter', author: 'Chef Hiro' }} />

            {/* Example with missing author field in the object */}
            <Dish name={{ title: 'Chocolate Cake' }} />
        </ScrollView>
    );
};

// Styles for the DishList component
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default DishList;
