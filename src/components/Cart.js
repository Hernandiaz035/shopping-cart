import { Component } from 'react';
import { BubbleAlert } from './BubbleAlert';
import { CartDetail } from './CartDetail';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#FFF',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px',
    },
}

class Cart extends Component {
    render() {
        const { value, cart, onClick, isCartVisible } = this.props;
        return (
            <div>
                <span style={styles.bubble}>
                    {value > 0 && <BubbleAlert value={value} />}
                </span>
                <button style={styles.cart} onClick={onClick}>
                    Cart
                </button>
                {isCartVisible ? <CartDetail cart={cart} /> : null}
            </div>
        );
    }
}

export { Cart };
