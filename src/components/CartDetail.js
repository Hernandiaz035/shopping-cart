import { Component } from 'react';

const styles = {
    popUp: {
        backgroundColor: '#FFF',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        border: '1px solid #CCC',
        borderRadius: '5px',
        width: '300px',
        right: '50px',
    },
    products_list: {
        margin: 0,
        padding: 0,
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        padding: '25px 20px',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid #999',
    },
    product_img: {
        width: 50,
        height: 32,
    },
}

class CartDetail extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div style={styles.popUp}>
                <ul style={styles.products_list}>
                    {Object.values(cart).map((p, idx) => (
                        <li style={styles.product} key={idx}>
                            <img style={styles.product_img} src={p.img} alt={p.img} />
                            <p>{p.name}</p>
                            <p>{p.qty}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export {CartDetail};
