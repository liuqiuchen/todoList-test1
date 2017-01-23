import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './actions/actions';

let store = createStore(todoApp);

// 测试
// 打印初始状态
console.log(store.getState());

let unSubscribe = store.subscribe(() => {
    console.log(store.getState());
});

let addAction1 = addTodo('Learn about actions');
let addAction2 = addTodo('Learn about reducers');
let addAction3 = addTodo('Learn about store');
store.dispatch(addAction1);
store.dispatch(addAction2);
store.dispatch(addAction3);

// 移除监听
unSubscribe();