import { Component } from 'react'
import { Product } from './Product'

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div style={styles.products}>
        {products.map((product, idx) =>
          <Product
            product={product}
            addToCart={addToCart}
            key={idx}
          />)}
      </div>
    );
  }
}

export { Products };
