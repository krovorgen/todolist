import { addTaskAC, removeTaskAC, setTaskAC, updateTaskAC } from '../../actions/tasks-actions';
import { AllTasksType } from '../../../types';
import { tasksReducer } from '../tasks-reducer';
import { addTodolistAC, removeTodolistAC, setTodolistAC } from '../../actions/todolists-actions';
import { TaskPriorities, TaskStatuses } from '../../actions/types/tasks-actions.type';

test('correct task should be deleted from correct array', () => {
  const startState: AllTasksType = {
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = removeTaskAC('2', 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState).toEqual({
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  });
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('correct task should be added to correct array', () => {
  const startState: AllTasksType = {
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = addTaskAC({
    id: '3',
    title: 'juce',
    status: TaskStatuses.New,
    todoListId: 'todolistId2',
    description: '',
    startDate: new Date(2022, 0, 17),
    deadline: new Date(2022, 0, 17),
    addedDate: new Date(2022, 0, 17),
    order: 0,
    priority: TaskPriorities.Low,
  });

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'].length).toBe(3);
  expect(endState['todolistId2'].length).toBe(4);
  expect(endState['todolistId2'][3].id).toBeDefined();
  expect(endState['todolistId2'][3].title).toBe('juce');
  expect(endState['todolistId2'][3].status).toBe(TaskStatuses.New);
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('status of specified task should be changed', () => {
  const startState: AllTasksType = {
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = updateTaskAC('2', { status: TaskStatuses.New }, 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New);
  expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed);
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('title of specified task should be changed', () => {
  const startState: AllTasksType = {
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = updateTaskAC('2', { title: 'sugar' }, 'todolistId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'][1].title).toBe('JS');
  expect(endState['todolistId2'][1].title).toBe('sugar');
  expect(endState['todolistId1'] !== endState['todolistId2']).toBeTruthy();
});

test('new array should be added when new todolist is added', () => {
  const startState: AllTasksType = {
    todolistId1: [
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = addTodolistAC({
    id: 'todolistId12',
    title: 'new todolist',
    addedDate: new Date(),
    order: 0,
  });

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
      {
        id: '1',
        title: 'CSS',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'JS',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'React',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    todolistId2: [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '2',
        title: 'milk',
        status: TaskStatuses.Completed,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
      {
        id: '3',
        title: 'tea',
        status: TaskStatuses.New,
        todoListId: 'todolistId2',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
  };

  const action = removeTodolistAC('todolistId2');

  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);

  expect(keys.length).toBe(1);
  expect(endState['todolistId2']).not.toBeDefined();
});

test('empty arrays should be added when we set todolists', () => {
  const action = setTodolistAC([
    { id: '1', title: 'title 1', order: 0, addedDate: new Date(2022, 0, 17) },
    { id: '2', title: 'title 2', order: 0, addedDate: new Date(2022, 0, 17) },
  ]);

  const endState = tasksReducer({}, action);

  const keys = Object.keys(endState);

  expect(keys.length).toBe(2);
  expect(endState['1']).toBeDefined();
  expect(endState['2']).toBeDefined();
});

test('set tasks', () => {
  const action = setTaskAC(
    [
      {
        id: '1',
        title: 'bread',
        status: TaskStatuses.Completed,
        todoListId: '17',
        description: '',
        startDate: new Date(2022, 0, 17),
        deadline: new Date(2022, 0, 17),
        addedDate: new Date(2022, 0, 17),
        order: 0,
        priority: TaskPriorities.Low,
      },
    ],
    '17'
  );
  const endState = tasksReducer({}, action);
  const keys = Object.keys(endState);
  expect(keys.length).toBe(1);
  expect(endState['17']).toBeDefined();
  expect(endState['17'].length).toBe(1);
  expect(endState['17'][0].title).toBe('bread');
});
