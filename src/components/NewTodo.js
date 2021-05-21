import React from 'react';

class NewTodo extends React.Component {

    constructor() {
            super();
            this.state = {
                subject: '',
                Date: ''
            }

            this.handleAdd = this.handleAdd.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.filter = this.filter.bind(this);
            this.getDate = this.getDate.bind(this);

        }
        //input control
    filter(text, date) {
        let minLength = 3;
        if (text) {
            if (text.length >= minLength) {
                return this.props.add(text, date);
            } else {
                alert("Please type more than three letter.");
                return false;
            }
        }
        alert("There is no to do work.");
        return false;
    }
    handleAdd() {
        var subject = this.state.subject;
        var date = this.state.Date;
        //this.props.add(subject);
        this.filter(subject, date);

        this.setState({
            subject: '',
            Date: ''
        })


    }

    handleChange(e) {

        this.setState({
            subject: e.target.value
        })
    }
    getDate(e) {
        var daydate = e.target.value;
        this.setState({
            Date: daydate
        })
    }
    render() {
        return ( 
            <div >
            <h1 > ToDo List </h1>   
            <div className = 'newtodo'>
            <input onChange = { this.handleChange }
            type = "text"
            value = { this.state.subject }
            placeholder = "To Do..." />
            <input type = "date"
            onChange = { this.getDate }
            value = { this.state.Date }/>
             <button onClick = { this.handleAdd } > + </button>   
             </div>   
            </div>
        )
    }
}
export default NewTodo;