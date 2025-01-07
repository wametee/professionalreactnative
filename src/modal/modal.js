// import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { Constants } from 'expo';

// Main class component for the app
export default class App extends Component {
  // State to manage the visibility of the modal
  state = {
    modalVisible: false, // Initially, the modal is not visible
  };

  // Method to handle the button press to show the modal
  _handleButtonPress = () => {
    this.setModalVisible(true); // Set the modal visibility to true
  };

  // Method to update the modal's visibility state
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible }); // Update the state
  };

  render() {
    // Inline style for the modal background (semi-transparent overlay)
    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% transparency
    };

    // Inline style for the modal's inner container
    var innerContainerTransparentStyle = {
      backgroundColor: '#fff', // White background for the modal content
      padding: 20, // Add spacing inside the container
    };

    return (
      <View style={styles.container}>
        {/* Modal Component */}
        <Modal
          animationType="fade" // Fade-in and fade-out animation
          transparent={true} // Enable transparent background for the modal
          visible={this.state.modalVisible} // Controls the visibility of the modal
          onRequestClose={() => this.setModalVisible(false)} // Callback when the modal is closed (Android back button)
        >
          {/* Modal's overlay */}
          <View style={[styles.container, modalBackgroundStyle]}>
            {/* Modal's inner content */}
            <View style={innerContainerTransparentStyle}>
              <Text>This is a modal</Text> {/* Modal text content */}
              {/* Button to close the modal */}
              <Button
                title="Close"
                onPress={this.setModalVisible.bind(this, false)} // Close modal on button press
              />
            </View>
          </View>
        </Modal>

        {/* Button to open the modal */}
        <Button
          title="Press me"
          onPress={this._handleButtonPress} // Show modal on button press
        />
      </View>
    );
  }
}

// Stylesheet for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    paddingTop: Constants.statusBarHeight, // Adjust for the status bar height
    backgroundColor: '#ecf0f1', // Light gray background for the app
  },
});



// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Button, Modal } from 'react-native';
// import { Constants } from 'expo';

// export default class App extends Component {
//   state = {
//     modalVisible: false,
//   };
  
//   _handleButtonPress = () => {
//     this.setModalVisible(true);
//   };

//   setModalVisible = (visible) => {
//     this.setState({modalVisible: visible});
//   }
  
//   render() {
//     var modalBackgroundStyle = {
//       backgroundColor: 'rgba(0, 0, 0, 0.5)'
//     };
//     var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};
//     return (
//       <View style={styles.container}>
//       <Modal
//           animationType='fade'
//           transparent={true}
//           visible={this.state.modalVisible}
//           onRequestClose={() => this.setModalVisible(false)}
//           >
//           <View style={[styles.container, modalBackgroundStyle]}>
//             <View style={innerContainerTransparentStyle}>
//               <Text>This is a modal</Text>
//               <Button title='close'
//                 onPress={this.setModalVisible.bind(this, false)}/>
//             </View>
//           </View>
//         </Modal>
//         <Button
//           title="Press me"
//           onPress={this._handleButtonPress}
//         />
      
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   }
// });
