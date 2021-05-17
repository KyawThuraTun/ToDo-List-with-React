import React from 'react';

class NewTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            subject: ''
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filter = this.filter.bind(this);
    }
    //input control
    filter(text){
        let minLength = 3;
        if (text) {
            if (text.length >= minLength) {
                return this.props.add(text);
            } else {
                alert("Please type more than three letter.");
                return false;
            }
        }
        alert("There is no to do work.");
        return false;
    }
    handleAdd(){
        var subject = this.state.subject;
        //this.props.add(subject);
        this.filter(subject);

        this.setState({
            subject: ''
        })
      
        
    }
    
    handleChange(e){
        
        this.setState({
            subject: e.target.value
        })
        

    }
    render(){
        return ( 
            <div >
            <h1> ToDo List </h1>  
            <div className = 'newtodo' >
            <input onChange = { this.handleChange }
            type = "text"
            value = { this.state.subject }
            placeholder = "To Do..." 
            />
            <button onClick = { this.handleAdd } > + </button>  
            </div>  
            </div>
        )
    }
}
export default NewTodo;