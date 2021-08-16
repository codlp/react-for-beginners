import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    // const image = this.props.details.image;
    // const image = this.props.details.name;
    // Destructuring refacto of the variables creation
    const { image, name, price, desc, status } = this.props.details;

    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          {/* formatPrice is a custom method located in src/helpers.js */}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
            disabled={!isAvailable}
            // We access our custom method addToOrder through the props
            onClick={() => this.props.addToOrder(this.props.index)}
        >
            {/* If the fish is available, the button text is "Add to Order".
            If not, then it is "Sold Out!" */}
            {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;