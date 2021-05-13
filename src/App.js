import React from 'react';
import './App.css'
class TodoItem extends React.Component{
  constructor(){
    super();
    this.handleChange=this.handleChange.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }
  handleChange(){
    this.props.toggle(this.props.id);
  }
  handleDelete(){
    this.props.remove(this.props.id);
    
  }
  
  render(){
    
    return(
      
      <li>
        <input type="checkbox" checked={this.props.status}
        onChange={this.handleChange}/>
        {this.props.status?(
          <s>{this.props.subject}</s>
        ) : (
          this.props.subject
        )}
        <a href="#" onClick={this.handleDelete}>&times;</a>
        </li>
    )
  }
}
class NewTodo extends React.Component {
  constructor() {
      super();
      this.state = {
          subject: ''
      }

      this.handleAdd = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  handleAdd() {
      var subject = this.state.subject;
      this.props.add(subject);

      this.setState({
          subject: ''
      })
  }
  handleChange(e) {
      this.setState({
          subject: e.target.value
      })

  }
  render() {
      return ( 
        <div>
          <h1> ToDo List </h1> 
          <div className = 'newtodo'>
            <input onChange = { this.handleChange }
              type = "text"
              value = { this.state.subject }
              placeholder = "To Do..."/>
            <button onClick = { this.handleAdd } > + </button> 
          </div> 
        </div>
      )
  }
}


class TodoList extends React.Component{
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
            <TodoItem
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


export default TodoList;