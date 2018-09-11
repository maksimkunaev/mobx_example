import React, {Component} from 'react';
import Button from './Button';
// import { observer, inject, autorun } from 'mobx-react'

// @inject('toDoList')
// @observer
class Block extends Component {

    render() {
        return <div>
            Block
            <Button />
        </div>
    }
}

export default Block;

