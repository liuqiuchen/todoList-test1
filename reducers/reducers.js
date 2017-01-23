/**
 * 设计state结构
 * {
 *      visibilityFilter: 'SHOW_ALL',
 *      todos: [
 *          {
 *              text: 'Consider using redux',
 *              completed: true
 *          },
 *          {
 *              text: 'Keep all state in a single tree',
 *              completed: false
 *          }
 *      ]
 * }
 */

// reducer就是一个纯函数，保持reducer的纯净很重要，不要在reducer里请求API和路由跳转
// 不要调用非纯函数，如 Date.now() 或 Math.random()。单纯执行计算。

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilter } from '../actions/actions';
import { combineReducers } from 'redux';

// 指定state的初始状态
const initialState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
};

// 拆分reducer
// 每个 reducer 只负责管理全局 state 中它负责的一部分。
function visibilityFilter(state, action) {
    if(state === undefined) {
        state = initialState.visibilityFilter;
    }
    if(action.type == SET_VISIBILITY_FILTER) {
        state = action.filter;
    }
    return state;
}
function todos(state, action) {
    if(state === undefined) {
        state = [];
    }
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

// 合并reducer，combineReducers所做的就是生成一个新的函数，用来合并你所有传入的reducer
/*export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}*/
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;



