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
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={() => console.log("Add to cart...")}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
