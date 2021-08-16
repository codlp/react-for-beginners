import React from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

// Seed of fishes
import sampleFishes from "../sample-fishes";

class App extends React.Component {
    // Creating and modifying a state must be done in the same file, and it is at the App level so that we can access state inside all the components
    state = {
      fishes: {},
      order: {}
  };
  // Any custom function that needs to update state needs to live in the same component where the state lives
  addFish = fish => {
      // 1. Create a copy of the existing state
      const fishes = {...this.state.fishes};
      // 2. Add our new fish to that fishes variable
      // We use Date.now to give a unique ID to the fish
      fishes[`fish${Date.now()}`] = fish;
      // 3. Set the new fishes object to state
      this.setState({
          fishes: fishes
      });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    // if order[key] exists, then we add 1 to it
    // if not, then we return 1
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
    // this.setState({ order: order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          { /* Adding props to our Header component */}
          <Header tagline="Fresh Seafood Market" age={26} cool={true} />
          <ul className="fishes">
            { /* We use Object.keys to be able to map over the Object fishes */}
            {Object.keys(this.state.fishes).map(key => (
              /* Each child in an array or iterator should have a unique "key" prop
              So we add a React key attribute and we give it the value of key.
              Example of key: fish1 */
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                // We pass our custom method addToOrder to the fish component
                // This method takes a key as an argument
                // But the key is not available in the Fish Component (in the dev tools, Key is located in the sidebar next to Props)
                // So we have to create an attribute (here, "index") with the value of key
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        {/* <Order {...this.state} /> would load the whole state into the Order component,
        but it is better to only load the elements that we need */}
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        {/* We pass the addFish state to the Inventory component so that we can then pass it to the AddFishForm component */}
        
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
