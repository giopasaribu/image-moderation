import React, { Component } from "react";
import OverallProduct from "./Component/OverallProduct";
import axios from "axios";
import StatusDropdown from "./Component/StatusDropdown";

const style = {
  marginTop: "25px"
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      statusFilter: ""
    };
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = () => {
    console.log("entering request product status : " + this.state.statusFilter);
    axios
      .get("http://localhost:8080/product?status=" + this.state.statusFilter)
      .then(response => {
        if (!response.data.length) {
          this.setState({
            products: [],
            statusFilter: this.state.statusFilter
          });
        } else {
          this.setState({
            products: response.data,
            statusFilter: this.state.statusFilter
          });
        }
      })
      .catch(err => {
        this.setState({ products: [], statusFilter: this.state.statusFilter });
      });
  };

  setStatusFilter = event => {
    console.log("entering status filter ... status = " + event.target.value);
    this.setState(
      {
        statusFilter: event.target.value
      },
      () => {
        this.requestProduct();
      }
    );
  };

  updateStatus = product => {
    axios.put("http://localhost:8080/product", product).then(response => {
      console.log("success update");
      this.requestProduct();
    });
  };

  reorderHandler = (productIndex, newProduct) => {
    this.setState(state => {
      const products = state.products.map((product, index) => {
        if (productIndex === index) {
          return newProduct;
        } else {
          return product;
        }
      });
      return { products };
    });
    console.log(this.state.products);
  };

  render() {
    return (
      <div>
        <StatusDropdown changed={this.setStatusFilter} />
        {this.state.products.map((product, index) => (
          <div style={style}>
            <span><b>{product.productName}</b></span>
            <OverallProduct
              key={product.id}
              id={`${product.id}`}
              product={product}
              productIndex={index}
              reorderHandler={this.reorderHandler}
              updateStatus={this.updateStatus}
              statusFilter={this.state.statusFilter}
            />
          </div>
        ))}
      </div>
    );
  }
}
