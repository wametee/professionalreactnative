import React from 'react';
import { ScrollView } from 'react-native';
import Recipe from './Recipe';

const RecipeList = () => {
    return (
        <ScrollView>
            {/* Using the Recipe component with a string name */}
            <Recipe name="Pancakes" isYummy={true} />
            {/* Using the Recipe component with an object name */}
            <Recipe
                name={{ title: 'French Toast', author: 'Chef Marie' }}
                isYummy={false}
            />
            {/* Another example with a string name */}
            <Recipe name="Spaghetti Bolognese" isYummy={true} />
        </ScrollView>
    );
};

// Exporting RecipeList so it can be used in the app
export default RecipeList;
