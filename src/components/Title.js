import { Component } from "react";

const styles = {
    title: {
        marginBotton: '30px',
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Store</h1>
        );
    }
}

export { Title };
