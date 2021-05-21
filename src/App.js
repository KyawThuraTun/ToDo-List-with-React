import React from 'react';
import NewTodo from './components/NewTodo';
import TodoItems from './components/TodoItems';
import './App.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                { subject: 'Something to do', status: 1, Date: "2021-05-17" },
                { subject: 'Make a TodoList app', status: 0, Date: "2021-05-17" },
                { subject: 'Read a Book', status: 1, Date: "2021-05-17" },
                { subject: 'Look movie', status: 0, Date: "2021-05-17" }
            ]
        }
       
        this.toggle = this.toggle.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.dateFilter = this.dateFilter.bind(this);
        
    }
    toggle(index) {
        var items = this.state.items;
        items[index].status = !items[index].status;
        this.setState({ items: items });
    }
    remove(index) {
        var items = this.state.items;
        delete items[index];
        this.setState({ items });
    }
    add(subject,date) {
        var items = this.state.items;
        
        items.push({
          subject:subject,
          status:0,
          Date : date
        })
        this.setState({ items });
    }
    dateFilter(e){
       
        var date = e.target.value;
        var test=this.state.items.filter(c=>c.Date == date).map(v=>v)
        // console.log("test",test);
        
       this.setState({items:test})
    }
    
    
    render() {
        var self = this;
        console.log("ITems",this.state.items)
        return ( 
        <div >
            <NewTodo add = { self.add }/>
            
            <ul>
                <input type="date" name="" onChange={self.dateFilter}/>
                
                {this.state.items && this.state.items.map((items, index)=> {
                    return (
                        <TodoItems key = { index }
                        id = { index }
                        status = { items.status }
                        subject = { items.subject }
                        date={items.Date}
                        toggle = { self.toggle }
                        remove = { self.remove }/>
                    )
                })
            } </ul>
         </div>
        )
    }
}
export default App;