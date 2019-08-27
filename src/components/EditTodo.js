import React from 'react';
import axios from 'axios';

class EditTodo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResonsible = this.onChangeResonsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(res=>{
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    onChangeDescription(e){
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeResonsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
        
    }

    onChangePriority(e){
        this.setState({
            todo_priority: e.target.value
        })
        
    }

    onChangeCompleted(e){
        this.setState({
            todo_completed: !this.state.todo_completed
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.todo_description)
        console.log(this.state.todo_responsible)
        console.log(this.state.todo_priority)
        console.log(this.state.todo_completed)
        
        const editTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.put('http://localhost:4000/todos/update/'+this.props.match.params.id, editTodo)
            .then(res => console.log(res.data));

        this.props.history.push('/');
        
    }

    render(){
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input  type="text" 
                                className="form-control" 
                                value={this.state.todo_description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeResonsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input" 
                                    id="priorityLow"
                                    name="optradio"
                                    value="Low" 
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">
                                Low
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input" 
                                    id="priorityMedium"
                                    name="optradio" 
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">
                                Medium
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input"
                                    id="priorityHigh"
                                    name="optradio" 
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">
                                High
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    onChange={this.onChangeCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}
                                    />
                            <label className="form-check-label">
                                Completed
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input  type="submit" 
                                className="btn btn-primary"
                                value="Update"
                                />
                    </div> 
                </form>
            </div>
        );
    }   
}

export default EditTodo;