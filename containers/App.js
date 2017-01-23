import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default class App extends Component {
    render () {
        return (
            <div>
                <AddTodo onAddClick={text => console.log('add todo', text)}/>
                <TodoList todos={[
                    {
                        text: 'use redux',
                        completed: true
                    },
                    {
                        text: 'Learn to connect it to redux',
                        completed: false
                    }
                ]}
                onTodoClick={index => console.log('todo clicked', index)}
                />
            </div>
        );
    }
}















