import React, { Component } from "react";
import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import "./ToDoList.css";
class App extends Component {
  state = {
   items: [
     {
       text: ""
     }
     
    ],
  };

  addTodo = (text) => {
    this.setState((prevState) => {
      return {
        items: [...prevState.items, {text}],
      }
      
    });
  }



  render() {
    return (
      <div>
        <Header />
        <ToDoList items={this.state.items}/>

      </div>
      
        
      
    )
  }
}
export default App;
