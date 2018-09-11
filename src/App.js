import React, { Component } from 'react';
import { observer, inject, autorun } from 'mobx-react'
import './App.css';
import Block from "./Block.js"

@inject('toDoList')
@observer
class App extends Component {

    addToDo() {
        this.props.toDoList.addToDo({
            task: this.task.value,
            finished: false,
            id: 2
        })
        this.task.value = ""
    }

    render() {
        return (
            <div className="App">
                <div>time to: {this.props.toDoList.alarm}</div>
                <input ref={node => this.time = node} />sec
                <button onClick={() => this.props.toDoList.wakeUp(this.time.value)}>
                    set an alarm</button>
                <ul>
                    {this.props.toDoList.todos.map((todo, id) =>
                        <li className="li"
                            key={id}>
                            <label className="label-form">
                                 <input onChange={() => todo.finished = !todo.finished} className="checkbox" checked={todo.finished} type="checkbox" name="checkbox-test" />
                                 <span className="checkbox-custom"></span>
                                 <span className="label">{todo.task}</span>
                            </label>
                            <span
                                className='edit'
                                onClick={() => todo.task = prompt('edit','new task')}>   edit</span>
                            <span
                                className='delete'
                                onClick={() => this.props.toDoList.todos.splice(id, 1)}>   delete</span>
                        </li>
                    )}
                </ul>
                <div>task unfinished: {this.props.toDoList.unfinishedTodoCount}</div>
                <div>
                    <input className="addText" type="text" ref={node => this.task = node} />
                </div>
                <button className="addBtn" onClick={this.addToDo.bind(this)}>add new todo</button>
                <Block />
             </div>
        );
    }
}

export default App;
