import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    render () {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
    handleClick () {
        const node = this.refs.input;
        const text = node.value;
        if(text == '') return;
        this.props.onAddClick(node.value);
        node.value = '';
    }
}

AddTodo.PropTypes = {
    onAddClick: PropTypes.func.isRequired
};