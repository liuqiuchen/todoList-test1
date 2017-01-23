// 定义action type
// add_todo toggle_todo set_visibility_filter

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


// 其他常量
export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action创建函数(action creator)，返回纯对象（纯粹的对象）
export function addTodo (text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo (index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}