import { Component } from "react";
import { Logo } from './Logo';
import { Cart } from './Cart';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        padding: '0 50px',
        position: 'relative',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)',
    },
}

class Navbar extends Component {
    render() {
        const { value } = this.props;

        return (
            <nav style={styles.navbar}>
                <Logo />
                <Cart value={ value }/>
            </nav>
        );
    }
}

export { Navbar };
