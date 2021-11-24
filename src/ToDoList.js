import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./ToDoList.css";
class ToDoList extends Component {
constructor(props) {
    super(props);

    this.state = {
        items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
}

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();

}

  deleteItem(key) {
    const filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref= { (a) => this._inputElement = a}
                placeholder="enter task">
                </input>
                <button type="submit">Add Task</button>
              </form>
            </div >
            <TodoItem entries={this.state.items} 
            delete={this.deleteItem}/>
          </div>
        );
      }
    }

export default ToDoList;