import React, { Component } from 'react';
import Todo from './Todo';
import axios from 'axios';

class TodosList extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(function(err){
                console.log(err);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(function(err){
                console.log(err);
            })
    }

    todoList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={i} />
        })
    }

    render(){
        return (
            <div>
                <h2>Todos List</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodosList;