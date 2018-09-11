import React, { Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('toDoList')
@observer
class Button extends Component {
    render() {
        return <div> {this.props.toDoList.todos.length} I&#39;m a button!</div>
    }
}

export default Button
