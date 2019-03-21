import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      input: "",
      inputTwo: "",
      operator: "",
      process: "",
      resultInput: "",
      operatorBool: false
    };
  }

  addToInput = val => {
    let input = this.state.input;
    let inputTwo = this.state.inputTwo;
    let operator = this.state.operator;
    let resultInput = this.state.resultInput;
    let operatorBool = this.state.operatorBool;

    if (isNaN(val)) {
      console.log("It's an Operator");
      if (val === ".") {
        alert("The Dot (.) button is still in progress");
      } else {
        if (operatorBool === false) {
          this.setState({
            operator: val,
            display: input + val,
            operatorBool: true
          });
        } else if (input !== "" && operator !== "" && inputTwo !== "") {
          this.handleEqualOperation(val);
        } else {
          this.setState({
            operator: val,
            display: input + val
          });
        }
      }
      console.log(operatorBool);
    } else {
      console.log("It's a Number");
      if (operatorBool === false) {
        if (input === "") {
          console.log("but It's a ZERO");
          this.setState({
            display: val,
            input: val
          });
        } else {
          if (input === "0" || resultInput !== "") {
            this.setState({
              display: val,
              input: val,
              resultInput: ""
            });
          } else {
            this.setState({
              display: input + val,
              input: input + val
            });
          }
        }
      } else {
        if (inputTwo === "") {
          console.log("we're now at InputTwo");
          this.setState({
            display: input + operator + val,
            inputTwo: val,
            process: input + operator + val
          });
        } else {
          if (inputTwo === "0") {
            this.setState({
              display: input + operator + val,
              inputTwo: val
            });
          } else {
            this.setState({
              display: input + operator + inputTwo + val,
              inputTwo: inputTwo + val,
              process: input + operator + inputTwo + val
            });
          }
        }
      }
    }
  };

  //Clear data
  handleClear = () => {
    this.setState({
      display: "0",
      input: "",
      inputTwo: "",
      operator: "",
      process: "",
      resultInput: "",
      operatorBool: false
    });
  };

  //Perform Calculation
  handleEqual = () => {
    let input = this.state.input;
    let inputTwo = this.state.inputTwo;
    let operator = this.state.operator;

    if (input !== "" && operator !== "" && inputTwo !== "") {
      this.setState({
        display: math.eval(this.state.process),
        input: math.eval(this.state.process),
        inputTwo: "",
        operator: "",
        resultInput: math.eval(this.state.process),
        operatorBool: false
      });
    }
  };

  handleEqualOperation = val => {
    let input = this.state.input;
    let inputTwo = this.state.inputTwo;
    let operator = this.state.operator;

    if (input !== "" && operator !== "" && inputTwo !== "") {
      this.setState({
        display: math.eval(this.state.process) + val,
        input: math.eval(this.state.process),
        inputTwo: "",
        operator: val,
        resultInput: math.eval(this.state.process),
        operatorBool: true
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.display} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
