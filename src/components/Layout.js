import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#02A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '800px',
    },
}

class Layout extends Component{
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { Layout };
