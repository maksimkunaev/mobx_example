import React, { Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('toDoList')
@observer
class Button extends Component {
    render() {
        console.log(`Button`, this.props.toDoList)

        return <div> {this.props.toDoList.todos.length} I'm a button!</div>
    }
}

export default Button
