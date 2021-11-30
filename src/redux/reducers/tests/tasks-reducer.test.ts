import {
  addTaskAC,
  changeStatusAC,
  changeTaskTextAC,
  removeTaskAC,
} from '../../actions/tasks-actions';
import { AllTasksType } from '../../../types';
import { tasksReducer } from '../tasks-reducer';
import { addTodolistAC, removeTodolistAC } from '../../actions/todolists-actions';

test('correct task should be deleted from correct array', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = removeTaskAC('2', 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState).toEqual({
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '3', title: 'tea', checked: false },
    ],
  });
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('correct task should be added to correct array', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = addTaskAC('juce', 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'].length).toBe(3);
  expect(endState['todolistId2'].length).toBe(4);
  expect(endState['todolistId2'][3].id).toBeDefined();
  expect(endState['todolistId2'][3].title).toBe('juce');
  expect(endState['todolistId2'][3].checked).toBeFalsy();
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('status of specified task should be changed', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = changeStatusAC('2', false, 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId2'][1].checked).toBeFalsy();
  expect(endState['todolistId1'][1].checked).toBeTruthy();
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('title of specified task should be changed', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = changeTaskTextAC('2', 'sugar', 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'][1].title).toBe('JS');
  expect(endState['todolistId2'][1].title).toBe('sugar');
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('new array should be added when new todolist is added', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = addTodolistAC('new todolist');

  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find((k) => k != 'todolistId1' && k != 'todolistId2');
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
  const startState: AllTasksType = {
    todolistId1: [
      { id: '1', title: 'CSS', checked: false },
      { id: '2', title: 'JS', checked: true },
      { id: '3', title: 'React', checked: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', checked: false },
      { id: '2', title: 'milk', checked: true },
      { id: '3', title: 'tea', checked: false },
    ],
  };

  const action = removeTodolistAC('todolistId2');

  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);

  expect(keys.length).toBe(1);
  expect(endState['todolistId2']).not.toBeDefined();
});
