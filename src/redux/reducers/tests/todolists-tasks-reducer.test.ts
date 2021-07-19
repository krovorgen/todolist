import { AllTasksType, TodolistDataType } from '../../../types';
import { addTodolistAC } from '../../actions/todolists-actions';
import { tasksReducer } from '../tasks-reducer';
import { todolistsReducer } from '../todolists-reducer';

test('ids should be equals', () => {
  const startTasksState: AllTasksType = {};
  const startTodolistsState: TodolistDataType[] = [];

  const action = addTodolistAC('new todolist');

  const endTasksState = tasksReducer(startTasksState, action);
  const endTodolistsState = todolistsReducer(startTodolistsState, action);

  const keys = Object.keys(endTasksState);
  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState[0].id;

  expect(idFromTasks).toBe(action.payload.todolistID);
  expect(idFromTodolists).toBe(action.payload.todolistID);
});
