import './App.css';
import React from "react";

const Screen = ({value}) => {
  
  if (value === "")
  {
    var valueScreen = 0;
  }
  else {
    valueScreen = value;
  }
    return (
      <div id='screen'>
      {valueScreen}
      </div>
    )
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      stepNumber: 0,
      result: "",
    };
  }
  jumpTo(calculation) {
    this.setState({
      result: calculation,
    });
  }

  render(){
    const oldCalculations = this.state.history.map((calculation, move) => {
      return (
        <div key={move} className="calculationContainer" onClick={() => this.jumpTo(calculation)}>
          <p className="calculation">{calculation}</p>
          <p className="result">{eval(calculation).toString()}</p>
        </div>
      );
    });
    const numAndOper = (e) => {
      this.setState({
        result: this.state.result.concat(e.target.name),
      });
    }

    const clear = () => {
      this.setState({
        result: "",
      });
    }

    const back = () => {
      this.setState({
        result: this.state.result.slice(0, this.state.result.length -1),
      });
    }

    const calc = () => {
      this.setState({
        history: this.state.history.concat(this.state.result),
        result: eval(this.state.result).toString(),
      });
    }

  const percent = () => {
    this.setState({
      result: this.state.result * 0.01,
    });
  }
    return (
      <div className='mainContainer'>
        <div className='calculator'>
          <Screen value={this.state.result}/>
        
          <div className='buttonsContainer'>
            <button id='C' onClick={clear}>C</button>
            <button id='back' onClick={back}>Cofnij</button>
            <button name="%" onClick={percent}>%</button>
            <button name="/" onClick={numAndOper}>/</button>
            <button name="7" onClick={numAndOper}>7</button>
            <button name="8" onClick={numAndOper}>8</button>
            <button name="9" onClick={numAndOper}>9</button>
            <button name="*" onClick={numAndOper}>X</button>
            <button name="4" onClick={numAndOper}>4</button>
            <button name="5" onClick={numAndOper}>5</button>
            <button name="6" onClick={numAndOper}>6</button>
            <button name="-" onClick={numAndOper}>-</button>
            <button name="1" onClick={numAndOper}>1</button>
            <button name="2" onClick={numAndOper}>2</button>
            <button name="3" onClick={numAndOper}>3</button>
            <button name="+" onClick={numAndOper}>+</button>
            <button name="." onClick={numAndOper}>.</button>
            <button name="0" onClick={numAndOper}>0</button>
            <button className='equals' onClick={calc}>=</button>
          
          </div>
        </div>
        
        <div className='history'>
          <h1>calculator<br/>history</h1>
          <div>{oldCalculations}</div>
        </div>
      </div>
    )
  }
}
export default App;
