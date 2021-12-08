import { Provider } from 'react-redux';
import { RootStateType } from '../types';
import { combineReducers, createStore } from 'redux';
import { todolistsReducer } from '../redux/reducers/todolists-reducer';
import { tasksReducer } from '../redux/reducers/tasks-reducer';

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
    },
  ],
  tasks: {
    '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a': [
      {
        id: '100b2cc0-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'First task',
        checked: false,
      },
      {
        id: '12f07260-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'Second task',
        checked: false,
      },
      {
        id: '15547a10-57f3-11ec-8bfd-dfd1e574e13a',
        title: 'Third task',
        checked: false,
      },
    ],
  },
};

const store = createStore(rootReducer, initialStore as RootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
  return <Provider store={store}>{storyFn()}</Provider>;
};
