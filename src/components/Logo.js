import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
    },
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                <h2>MyStore</h2>
            </div>
        );
    }
}

export { Logo };
