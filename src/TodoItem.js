import { Component } from "react";
class TodoItem extends Component {
createTasks(item) {
    return <li key={item.key}>{item.text}</li>
}
render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks)
    return(
        <div>
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    
        </div>
    )
}
}
export default TodoItem;