import React from 'react';
import NewTodo from './components/NewTodo';
import TodoItems from './components/TodoItems';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: [
        {subject:'Something to do',status:1},
        {subject:'Make a TodoList app',status:0},
        {subject:'Read a Book',status:1},
        {subject:'Look movie',status:0}
      ]
    }
    this.toggle=this.toggle.bind(this);
    this.remove=this.remove.bind(this);
    this.add=this.add.bind(this);
  }
  toggle(index){
    var items = this.state.items;
    items[index].status = !items[index].status;
    this.setState({items:items});
  }
  remove(index){
    var items = this.state.items;
    delete items[index];
    this.setState({items});
  }
  add(subject){
    var items = this.state.items;
    items.push({
      subject:subject,
      status:0
    });
    this.setState({items});
  }
  
  render(){
    var self = this;
    return (
      <div>
        <NewTodo add = {self.add}/>
        <ul>
        {this.state.items.map(function(items,index){
          return(
            <TodoItems
            key = {index}
            id = {index}
            status={items.status}
            subject={items.subject}
            toggle = {self.toggle}
            remove = {self.remove}/>
          )
        })}
      </ul>
      
      </div>
    )
  }
}
export default App;