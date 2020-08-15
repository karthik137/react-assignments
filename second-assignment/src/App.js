import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textLength:0,
    text:'',
    textCharArray:[]
  }

  inputTextListener(event){

    //Set state with new data's length
    let stringValue = event.target.value
    let textCharArray = stringValue.split('');
    this.setState({
      textLength: stringValue.length,
      text: event.target.value,
      textCharArray: textCharArray
    })
  }

  deleteChar = (index) => {

    //Copy the textCharArray
    let textCharArray = [...this.state.textCharArray]
    // let textCharArrayJoined = textCharArray.join('');
    console.log("textCharArray ",textCharArray);

    //Remove char at index
    textCharArray.splice(index, 1);
    console.log("removedCharArray ",textCharArray);

    let removedCharArrayJoined = textCharArray.join("");
    console.log("removedCharArrayJoined ",removedCharArrayJoined);

    //set new state
    this.setState({
      text: removedCharArrayJoined,
      textCharArray: textCharArray,
      textLength: textCharArray.length
    })
  }



  render() {
    return (
      <div className="App">
        <input onChange = {(event) => this.inputTextListener(event)} value={this.state.text} ></input>
        <p>{this.state.textLength}</p>
        { 
          this.state.textLength > 0 ?
            <ValidationComponent textLength={this.state.textLength}></ValidationComponent>
          : null
        }

        {
          this.state.textCharArray.map((char,index) => {
            return <CharComponent click={ () => this.deleteChar(index)} 
                    charValue={char}
                    key={index}></CharComponent>
          })

        }
               
      </div>
    );
  }
}

export default App;
