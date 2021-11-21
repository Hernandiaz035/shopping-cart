import { Component } from 'react';
import { BubbleAlert } from './BubbleAlert';

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
        const { value } = this.props;
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={value} />
                </span>
                <button style={styles.cart}>
                    Cart
                </button>
            </div>
        );
    }
}

export { Cart };
