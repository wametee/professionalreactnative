// This is a React class component
export default class MyComponent extends Component {
    // The constructor is a special method that is called when an instance of the class is created.
    constructor(props) {
      super(props); // Always call `super(props)` to access the `this` context inside the constructor.
  
      // Initialize the component's state inside the constructor.
      // This is where you can define the initial values of your state variables.
      this.state = {
        myInteger: 0 // Initialize `myInteger` with a value of 0
      };
    }
  
    // The `render` method returns the JSX that will be rendered on the screen.
    render() {
      return (
        <View>
          {/* Display the current value of `myInteger` from the component's state */}
          <Text>Integer: {this.state.myInteger}</Text>
        </View>
      );
    }
  }
  
  /*
  Key Notes:
  
  1. State Initialization:
     - The state is initialized in the constructor using `this.state = { ... }`. This is where the component's internal state variables are defined and can hold dynamic data.
  
  2. Constructor:
     - The constructor function is called when the component is created. It's responsible for setting up state and binding methods if needed.
  
  3. super(props):
     - In a class component, `super(props)` must be called in the constructor to ensure that `this` is properly initialized. It also passes the props to the parent `Component` class.
  
  4. Rendering the State:
     - Inside the `render()` method, we use `this.state.myInteger` to access the current value of the state and display it in the UI using JSX.
  */
  