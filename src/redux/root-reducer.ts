import { combineReducers } from 'redux';
import { todolistsReducer } from './reducers/todolists-reducer';
import { tasksReducer } from './reducers/tasks-reducer';

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
