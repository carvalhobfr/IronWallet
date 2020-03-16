import React, { Component } from 'react';
import { addStock } from './../../services/addstocks';

class AddStockView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      quantity: 0,
      buying_price: 0,
      currency: 'USD',
      wallet: {},
      date_of_purchase
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, type, quantity, buying_price, currency, date_of_purchase } = this.state;
    addStock({
      name,
      type,
      quantity,
      buying_price,
      currency,
      date_of_purchase
    })
      .then(stock => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="type">
            <div>
              <input type="checkbox" id="Crypto" name="Crypto" />
              <label for="Stocks">Stocks</label>
            </div>
            <div>
              <input type="checkbox" id="Crypto" name="Crypto" />
              <label for="Crypto">Crypto</label>
            </div>
          </label>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" />
          <label for="buying_price">Buying Price:</label>
          <input type="number" id="buying_price" name="buying_price" min="0" />
          <label for="date_of_purchase">Purchase Date:</label>
          <input type="date" id="date_of_purchase" name="date_of_purchase"></input>
        </form>
      </div>
    );
  }
}

export default AddStockView;
