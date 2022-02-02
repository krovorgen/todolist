import { todolistsReducer } from '../todolists-reducer';
import { v1 } from 'uuid';
import { FilterType, TodolistDataType } from '../../../types';
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistLoadingAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../../actions/todolists-actions';
import { TodolistType } from '../../../api';

test('correct todolist should be removed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodolistDataType[] = [
    {
      id: todolistId1,
      title: 'What to learn',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
    {
      id: todolistId2,
      title: 'What to buy',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
  ];

  const action: ReturnType<typeof removeTodolistAC> = removeTodolistAC(todolistId1);

  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = 'New Todolist';

  const startState: TodolistDataType[] = [
    {
      id: todolistId1,
      title: 'What to learn',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
    {
      id: todolistId2,
      title: 'What to buy',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
  ];

  const endState = todolistsReducer(
    startState,
    addTodolistAC({
      id: todolistId1,
      title: newTodolistTitle,
      addedDate: new Date(),
      order: 0,
    })
  );

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should change its name', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = 'New Todolist';

  const startState: TodolistDataType[] = [
    {
      id: todolistId1,
      title: 'What to learn',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
    {
      id: todolistId2,
      title: 'What to buy',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
  ];

  const endState = todolistsReducer(
    startState,
    changeTodolistTitleAC(todolistId2, newTodolistTitle)
  );

  expect(endState[0].title).toBe('What to learn');
  expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newFilter: FilterType = 'completed';

  const startState: TodolistDataType[] = [
    {
      id: todolistId1,
      title: 'What to learn',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
    {
      id: todolistId2,
      title: 'What to buy',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
  ];

  const endState = todolistsReducer(startState, changeTodolistFilterAC(todolistId2, newFilter));

  expect(endState[0].filter).toBe('all');
  expect(endState[1].filter).toBe(newFilter);
});

test('correct loadingStatus of todolist should be changed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodolistDataType[] = [
    {
      id: todolistId1,
      title: 'What to learn',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
    {
      id: todolistId2,
      title: 'What to buy',
      filter: 'all',
      addedDate: new Date(),
      order: 0,
      loadingStatus: 'idle',
    },
  ];

  const endState = todolistsReducer(startState, changeTodolistLoadingAC(todolistId2, 'loading'));

  expect(endState[0].loadingStatus).toBe('idle');
  expect(endState[1].loadingStatus).toBe('loading');
});

test('set todolist', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const newTodolists: TodolistType[] = [
    { id: todolistId1, title: 'What to learn', addedDate: new Date(), order: 1 },
    { id: todolistId2, title: 'What to buy', addedDate: new Date(), order: 1 },
  ];

  const endState = todolistsReducer([], setTodolistAC(newTodolists));

  expect(endState[0].title).toBe('What to learn');
  expect(endState[1].title).toBe('What to buy');
  expect(endState.length).toBe(2);
});
