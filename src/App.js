import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Header from "./Header";
import ToDoForm from "./forms/ToDoForm";
import ToDoList from "./ToDoList";

class App extends Component {
  state = {
   items: [
     {
       text: "Walk dog"
     },
     {
       text: "get groceries"
     },
     {
       text: "make doctors appointment"
     },
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
        <ToDoForm />
      </div>
      
        
      
    )
  }
}
export default App;
