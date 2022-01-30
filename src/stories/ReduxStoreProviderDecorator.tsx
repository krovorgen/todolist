import { Provider } from 'react-redux';
import { RootStateType } from '../types';
import { combineReducers, createStore } from 'redux';
import { todolistsReducer } from '../redux/reducers/todolists-reducer';
import { tasksReducer } from '../redux/reducers/tasks-reducer';
import { TaskPriorities, TaskStatuses } from '../redux/actions/types/tasks-actions.type';

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

const initialStore = {
  todolists: [
    {
      id: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
      title: 'Test todolist',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
    },
  ],
  tasks: {
    '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a': [
      {
        id: '100b2cc0-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'First task',
        status: TaskStatuses.New,
        todoListId: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
        description: '',
        startDate: new Date(),
        deadline: new Date(),
        addedDate: new Date(),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '12f07260-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'Second task',
        status: TaskStatuses.New,
        todoListId: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
        description: '',
        startDate: new Date(),
        deadline: new Date(),
        addedDate: new Date(),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '15547a10-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'Third task',
        status: TaskStatuses.New,
        todoListId: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
        description: '',
        startDate: new Date(),
        deadline: new Date(),
        addedDate: new Date(),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  },
  app: {
    status: 'loading',
  },
};

const store = createStore(rootReducer, initialStore as RootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
  return <Provider store={store}>{storyFn()}</Provider>;
};
