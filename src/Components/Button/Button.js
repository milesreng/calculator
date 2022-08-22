import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    isOperator(value) {
        return !isNaN(value) || value === "." || value === "=";
    }
    
    render() {
        return (
            <div className={`button-container ${this.isOperator(this.props.children) ? null : "operator"}`} 
                    onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;