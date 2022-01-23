import { AllTasksType } from '../../types';
import {
  TaskPriorities,
  TasksActionsType,
  TasksActionType,
  TaskStatuses,
} from '../actions/types/tasks-actions.type';
import { v1 } from 'uuid';
import { TodolistsActionsType } from '../actions/types/todolists-actions.type';
import { TodolistTask } from '../../api';

const initialState: AllTasksType = {};

export const tasksReducer = (state = initialState, action: TasksActionType): AllTasksType => {
  switch (action.type) {
    case TasksActionsType.SET_TASK: {
      const copyState = { ...state };
      copyState[action.payload.todolistId] = action.payload.tasks.map((tl) => ({
        ...tl,
        status: TaskStatuses.New,
      }));
      return state;
    }
    case TasksActionsType.ADD_TASK: {
      let newTask: TodolistTask = {
        id: v1(),
        title: action.payload.inputValue,
        status: TaskStatuses.New,
        todoListId: action.payload.todolistId,
        description: '',
        startDate: new Date(),
        deadline: new Date(),
        addedDate: new Date(),
        order: 0,
        priority: TaskPriorities.Low,
      };
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId], newTask],
      };
    }

    case TasksActionsType.REMOVE_TASK:
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId]].filter(
          (item) => item.id !== action.payload.taskId
        ),
      };

    case TasksActionsType.CHANGE_STATUS: {
      let todolistTasks = state[action.payload.todolistId];
      state[action.payload.todolistId] = todolistTasks.map((tasks) =>
        tasks.id === action.payload.taskId ? { ...tasks, status: action.payload.status } : tasks
      );
      return { ...state };
    }

    case TasksActionsType.CHANGE_TASK_TEXT: {
      let todolistTasks = state[action.payload.todolistId];
      state[action.payload.todolistId] = todolistTasks.map((tasks) =>
        tasks.id === action.payload.taskId ? { ...tasks, title: action.payload.newValue } : tasks
      );
      return { ...state };
    }

    case TodolistsActionsType.SET_TODOLISTS: {
      const copyState = state;

      action.payload.forEach((tl) => {
        copyState[tl.id] = [];
      });
      return copyState;
    }

    case TodolistsActionsType.ADD_TODOLIST: {
      return {
        ...state,
        [action.payload.todolistID]: [],
      };
    }

    case TodolistsActionsType.REMOVE_TODOLIST: {
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    }

    default:
      return state;
  }
};
