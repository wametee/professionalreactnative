import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

// Define the styles for the components
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 22, // Adds some spacing from the top
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  modalContainer: {
    flex: 1, // Ensures the modal overlay takes up the full screen
    justifyContent: 'center', // Centers modal content vertically
    alignItems: 'center', // Centers modal content horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a translucent background for better focus on the modal
  },
  modalContent: {
    backgroundColor: '#fff', // White background for the modal content
    padding: 20, // Adds internal spacing around the content
    borderRadius: 10, // Rounded corners for a modern UI
    alignItems: 'center', // Centers content horizontally inside the modal
    shadowColor: '#000', // Adds shadow for better visual hierarchy
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for depth effect
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 4, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow support
  },
  button: {
    marginTop: 10, // Adds spacing between the modal content and button
  },
});

const Example = () => {
  // State hook to manage modal visibility
  const [visibility, setVisibility] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {/* Modal component to display content over the existing screen */}
      <Modal
        animationType="slide" // Defines the animation type when the modal appears
        transparent={true} // Makes the modal background semi-transparent
        visible={visibility} // Controls whether the modal is visible
        onRequestClose={() => setVisibility(false)} // Handles the Android back button
      >
        {/* Modal content wrapper */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Text inside the modal */}
            <Text>I'm a simple Modal</Text>
            {/* Button to hide the modal */}
            <View style={styles.button}>
              <Button
                color="#000" // Button text color
                onPress={() => setVisibility(false)} // Closes the modal
                title="Hide Modal" // Button label
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Button to show the modal */}
      <Button
        color="#000" // Button text color
        onPress={() => setVisibility(true)} // Opens the modal
        title="Show Modal" // Button label
      />
    </View>
  );
};

export default Example;
