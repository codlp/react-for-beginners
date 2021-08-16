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
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          { /* Adding props to our Header component */}
          <Header tagline="Fresh Seafood Market" age={26} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
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
