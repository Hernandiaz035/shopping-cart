import { Component } from 'react';
import { Products } from './components/Products';

class App extends Component {
  state = {
    products: [
      {name: 'Tomato', price: 1500, img: '/products/tomato.jpg'},
      {name: 'Peas', price: 800, img: '/products/peas.jpg'},
      {name: 'Lettuce', price: 500, img: '/products/lettuce.jpg'},
    ]
  }

  render() {
    return (
      <main>
        <Products
          addToCart={() => console.log("Add to cart...")}
          products={this.state.products}
        />
      </main>
    )
  }
}

export default App;
