import React, { Component } from 'react';  // Importing React and Component class
import { Text, Navigator, TouchableHighlight } from 'react-native';  // Importing necessary components from React Native

// The 'NavAllDay' class component handles the navigation setup
export default class NavAllDay extends Component {

  // The render method is responsible for rendering the UI of the component
  render() {
    return (
      <Navigator
        // The initialRoute defines the first route to be displayed when the Navigator is rendered
        initialRoute={{ title: 'Awesome Scene', index: 0 }}  
        
        // The renderScene function defines how the UI for each route will look
        // It takes two arguments: route (the current route object) and navigator (for navigating between routes)
        renderScene={(route, navigator) =>
          // Rendering a Text component displaying the title of the current route
          <Text>Hello {route.title}!</Text>
        }
        
        // Styling the Navigator component with some padding
        style={{ padding: 100 }}  
      />
    );
  }
}

/*
Key Notes:

1. Navigator Component:
   - The `Navigator` is a built-in component in React Native that handles navigation between screens in both iOS and Android.
   - It relies on the concept of routes, which are provided as objects, each representing a different screen in the app.

2. initialRoute:
   - The `initialRoute` prop specifies the first screen or route that will be shown when the app starts.
   - In this example, the first screen displays a title of "Awesome Scene" and an index of 0, indicating it's the first screen in the navigation stack.

3. renderScene Function:
   - The `renderScene` function is passed two arguments: `route` (which contains data about the current route) and `navigator` (which is used to navigate between routes).
   - The function returns a UI for the route. In this example, it renders a `Text` component that displays a greeting with the route's title (e.g., "Hello Awesome Scene!").

4. Routing/Navigation:
   - Navigation is crucial for providing a smooth user experience in a mobile app. It allows users to move between different screens, giving context about where they are within the app.
   - The `Navigator` component acts as a state machine, managing the flow of the app by transitioning between routes/screens based on user interactions.
   - It decouples user actions from the actual screens, ensuring seamless navigation and enabling easy management of the app's state.

This enhanced version provides a better understanding of how navigation works and how the `Navigator` component helps manage screen transitions in a mobile app.
*/
