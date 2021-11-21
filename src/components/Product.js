import { Component } from 'react';

const styles = {
    product: {
        border: 'solid 1px #eee',
        borderRadius: '5px',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        margin: '10px 15px',
    },
    img:  {
        width:  '100%',
    }
}

class Product extends Component {
    render() {
        const {
            product,
            addToCart,
            key,
        } = this.props;

        return (
            <div
                style={styles.product}
                className="product-card"
                key={key}
            >
                <img
                style={styles.img}
                    src={product.img}
                    alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>{`$${product.price}`}</p>
                <button
                    onClick= {addToCart}
                >
                    Add to cart
                </button>
            </div>
        );
    }
}

export { Product };
