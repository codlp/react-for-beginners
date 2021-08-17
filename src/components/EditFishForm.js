import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        // 1. Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            // Computed property names = we want the value that is updated to be dynamic
            // We go take the value of the "name" attribute of each input
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        </div>;
    }
}

export default EditFishForm;