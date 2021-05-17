import React from 'react';

class TodoItems extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange() {
        this.props.toggle(this.props.id);
    }
    handleDelete() {
        this.props.remove(this.props.id);

    }

    render() {

        return (

            <li>
            <input type = "checkbox"
            checked = { this.props.status }
            onChange = { this.handleChange }/> 
            {this.props.status ? ( 
                <s> {this.props.subject} </s>
                ) : 
                (this.props.subject)
            } 
            <a href = "#" onClick = { this.handleDelete }> &times;</a> 
            </li>
        )
    }
}
export default TodoItems;