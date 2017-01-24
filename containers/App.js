import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { VisibilityFilter, addTodo, toggleTodo, setVisibilityFilter } from '../actions/actions';

class App extends Component {
    render () {

        // 通过调用 connect() 注入：
        const { dispatch, visibilityTodos, visibilityFilter } = this.props;

        return (
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList todos={visibilityTodos}
                onTodoClick={index => dispatch(toggleTodo(index))}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={filter => {
                        dispatch(setVisibilityFilter(filter))
                    }}
                />
            </div>
        );
    }
}

App.PropTypes = {
  visibilityTodos: PropTypes.arrayOf({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
  }),
  visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETE',
      'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilter.SHOW_COMPLETE:
            return todos.filter(todo => todo.completed);
    }
}

// 基于全局state，哪些是我们想注入的props？
// 注意：使用 https://github.com/reactjs/reselect 效果更佳
function select(state) {
    return {
        visibilityTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);







