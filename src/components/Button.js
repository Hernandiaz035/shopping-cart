import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#3d3',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        color: '#eee',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        );
    }
}

export { Button };
