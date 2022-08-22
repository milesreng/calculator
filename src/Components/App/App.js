import React from 'react';
import './App.css';

import Button from '../Button/Button';
import ClearButton from '../ClearButton/ClearButton';
import Input from '../Input/Input';
import * as math from 'mathjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0
    }

    this.addInput = this.addInput.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  addInput(val) {
    if (this.state.input == 0) {
      this.setState({input: val});
    } else {
      this.setState({input: this.state.input + val});
    }
  }

  handleEquals() {
    this.setState({input: math.evaluate(this.state.input)});
  }

  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <Input input={this.state.input} />
          <Button handleClick={this.addInput}>7</Button>
          <Button handleClick={this.addInput}>8</Button>
          <Button handleClick={this.addInput}>9</Button>
          <Button handleClick={this.addInput} className="operator">/</Button>
          <Button handleClick={this.addInput}>4</Button>
          <Button handleClick={this.addInput}>5</Button>
          <Button handleClick={this.addInput}>6</Button>
          <Button handleClick={this.addInput} className="operator">*</Button>
          <Button handleClick={this.addInput}>1</Button>
          <Button handleClick={this.addInput}>2</Button>
          <Button handleClick={this.addInput}>3</Button>
          <Button handleClick={this.addInput} className="operator">-</Button>
          <Button handleClick={this.addInput}>0</Button>
          <Button handleClick={this.addInput}>.</Button>
          <Button handleClick={() => this.handleEquals()}>=</Button>
          <Button handleClick={this.addInput} className="operator">+</Button>
          <ClearButton handleClear={() => this.setState({input: "0"})} />
        </div>
      </div>
    );
  }
}

export default App;
