import { Component } from 'react';
import { Products } from './components/Products';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';

class App extends Component {
  state = {
    products: [
      {name: 'Tomato', price: 1500, img: '/products/tomato.jpg'},
      {name: 'Peas', price: 800, img: '/products/peas.jpg'},
      {name: 'Lettuce', price: 500, img: '/products/lettuce.jpg'},
    ],
    cart: {},
    cartSize: 0,
    isCartVisible: false,
  }

  addToCart = (product) => {
    let tmpCart = {};
    if (!this.state.cart[product.name]) {
      tmpCart = { ...this.state.cart };
      tmpCart[product.name] = { ...product, qty: 1 };
      this.setState({ cart: tmpCart });
    } else {
      tmpCart = { ...this.state.cart };
      tmpCart[product.name].qty++;
      this.setState({ cart: tmpCart });
    }
    this.setState({ cartSize: this.state.cartSize + 1 });
  };

  render() {
    return (
      <div>
        <Navbar
          cartSize={this.state.cartSize}
          cart={this.state.cart}
          isCartVisible={this.state.isCartVisible}
          ToggleCarVisibility={() => this.setState({
            isCartVisible: this.state.cartSize>0 && !this.state.isCartVisible
          })}
        />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
