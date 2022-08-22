import React from "react";
import './ClearButton.css';

class ClearButton extends React.Component {
    render() {
        return <div className="clear-button-container" onClick={this.props.handleClear}>clear</div>;
    }
}

export default ClearButton;