import { combineReducers } from 'redux';
import { todolistsReducer } from './reducers/todolists-reducer';
import { tasksReducer } from './reducers/tasks-reducer';
import { appReducer } from './reducers/app-reducer';

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
  app: appReducer,
});

export default rootReducer;
