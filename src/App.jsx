import React, { Component } from "react";
import "./App.css";
import { Title } from "./components/Title";
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
      operatorBool: false,
      dotBool: false
    };
  }

  addToInput = val => {
    let input = this.state.input;
    let inputTwo = this.state.inputTwo;
    let operator = this.state.operator;
    let resultInput = this.state.resultInput;
    let operatorBool = this.state.operatorBool;
    let dotBool = this.state.dotBool;
    let display = this.state.display;

    if (isNaN(val)) {
      console.log("It's an Operator");
      if (val === ".") {
        if (dotBool === false) {
          if (operatorBool === false) {
            if (input === "") {
              console.log("But it's a DOT");
              this.setState({
                dotBool: true,
                display: display + val,
                input: display + val
              });
            }
            else {
              this.setState({
                dotBool: true,
                display: input + val,
                input: input + val
              });
            }
          }
          else {
            if (dotBool === false) {
              if (inputTwo === "") {
                console.log("But it's a DOT");
                this.setState({
                  dotBool: true,
                  display: input + operator + "0" + val,
                  inputTwo: "0" + val
                });
              }
              else {
                this.setState({
                  dotBool: true,
                  display: input + operator + inputTwo + val,
                  inputTwo: inputTwo + val,
                  process: input + operator + inputTwo + val
                });
              }
            }
          }

        }
      } else {
        if (operatorBool === false) {
          this.setState({
            operator: val,
            display: input + val,
            operatorBool: true,
            dotBool: false
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
      if (operatorBool === false) {
        if (input === "") {
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
      operatorBool: false,
      dotBool: false
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
        operatorBool: false,
        dotBool: false
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
        operatorBool: true,
        dotBool: false
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="row">
            <Title></Title>
          </div>
          <Input input={this.state.display} />
          <div className="row">
            <Button id="seven" handleClick={this.addToInput}>7</Button>
            <Button id="eight" handleClick={this.addToInput}>8</Button>
            <Button id="nine" handleClick={this.addToInput}>9</Button>
            <Button id="opDivide" handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button id="four" handleClick={this.addToInput}>4</Button>
            <Button id="five" handleClick={this.addToInput}>5</Button>
            <Button id="six" handleClick={this.addToInput}>6</Button>
            <Button id="opMultiply" handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button id="one" handleClick={this.addToInput}>1</Button>
            <Button id="two" handleClick={this.addToInput}>2</Button>
            <Button id="three" handleClick={this.addToInput}>3</Button>
            <Button id="opAdd" handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button id="period" handleClick={this.addToInput}>.</Button>
            <Button id="zero" handleClick={this.addToInput}>0</Button>
            <Button id="equal" handleClick={() => this.handleEqual()}>=</Button>
            <Button id="opSubtract" handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton id="clear" handleClear={this.handleClear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
