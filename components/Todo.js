import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

    render () {

        return (
            <div>
                <li
                    onClick={this.props.onClick}
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                        cursor: this.props.completed ? 'default' : 'pointer'
                    }}>
                    {this.props.text}
                </li>
            </div>
        )
    }
}

Todo.PropTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};