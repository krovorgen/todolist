import React, { useCallback, useEffect, useState } from 'react';

import { api, TodolistTasksType, TodolistType } from '../api';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';

export default {
  title: 'API',
};

export const GetTodolists = () => {
  const [state, setState] = useState<TodolistType[] | null>(null);
  useEffect(() => {
    api.getTodolists().then(({ data }) => {
      setState(data);
    });
  }, []);

  return (
    <>
      <ul>
        {state &&
          state.length !== 0 &&
          state.map((item, index: number) => (
            <li key={index} style={{ marginBottom: 24 }}>
              <p>
                <strong>id:</strong> {item.id}
              </p>
              <p>
                <strong>title:</strong> {item.title}
              </p>
              <p>
                <strong>addedDate:</strong> {item.addedDate}
              </p>
              <p>
                <strong>order:</strong> {item.order}
              </p>
            </li>
          ))}
      </ul>
      <p>{JSON.stringify(state)}</p>
    </>
  );
};
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const createTodolist = () => {
    api.createTodolists(inputValue).then(({ data }) => {
      setState(data);
    });
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          value={inputValue}
          placeholder="todolist title"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button onClick={createTodolist}>create</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const deleteTodolist = useCallback(() => {
    api.deleteTodolists(inputValue).then(({ data }) => {
      setState(data);
    });
  }, [inputValue]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={inputValue}
          placeholder="todolist id"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button onClick={deleteTodolist}>delete</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputTitle, setInputTitle] = useState<string>('');

  const updateTitleTodolist = useCallback(() => {
    api.updateTitleTodolists(inputValue, inputTitle).then(({ data }) => {
      setState(data);
    });
  }, [inputValue, inputTitle]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={inputValue}
          placeholder="todolist id"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={inputTitle}
          placeholder="todolist title"
          onChange={(e) => setInputTitle(e.currentTarget.value)}
        />
        <Button onClick={updateTitleTodolist}>update title</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export const GetTodolistsTasks = () => {
  const [state, setState] = useState<TodolistTasksType | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const getTodolistsTasks = () => {
    api.getTodolistsTasks(inputValue).then(({ data }) => {
      setState(data);
    });
  };

  return (
    <>
      <div>
        <Input
          type="text"
          value={inputValue}
          placeholder="todolist id"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button onClick={getTodolistsTasks}>Get tasks</Button>
      </div>
      <ul>
        {state &&
          state.items.length !== 0 &&
          state.items.map((item, index: number) => (
            <li key={index} style={{ marginBottom: 24 }}>
              <p>
                <strong>id:</strong> {item.id}
              </p>
              <p>
                <strong>order:</strong> {item.todoListId}
              </p>
              <p>
                <strong>title:</strong> {item.title}
              </p>
              <p>
                <strong>description:</strong> {item.description}
              </p>
              <p>
                <strong>addedDate:</strong> {item.addedDate}
              </p>
              <p>
                <strong>startDate:</strong> {item.startDate}
              </p>
              <p>
                <strong>deadline:</strong> {item.deadline}
              </p>
              <p>
                <strong>status:</strong> {item.status}
              </p>
              <p>
                <strong>priority:</strong> {item.priority}
              </p>
              <p>
                <strong>order:</strong> {item.order}
              </p>
            </li>
          ))}
      </ul>
      <p>{JSON.stringify(state)}</p>
    </>
  );
};
export const CreateTodolistTask = () => {
  const [state, setState] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputTodolistId, setInputTodolistId] = useState<string>('');

  const createTodolist = useCallback(() => {
    api.createTodolistsTasks(inputTodolistId, inputValue).then(({ data }) => {
      setState(data);
    });
  }, [inputTodolistId, inputValue]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={inputTodolistId}
          placeholder="todolist id"
          onChange={(e) => setInputTodolistId(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={inputValue}
          placeholder="todolist task title"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button onClick={createTodolist}>create</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
export const DeleteTodolistTask = () => {
  const [state, setState] = useState<any>(null);
  const [todolistId, setTodolistId] = useState<string>('');
  const [taskId, setTaskId] = useState<string>('');

  const deleteTodolist = useCallback(() => {
    api.deleteTodolistsTask(todolistId, taskId).then(({ data }) => {
      setState(data);
    });
  }, [taskId, todolistId]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={todolistId}
          placeholder="todolist id"
          onChange={(e) => setTodolistId(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={taskId}
          placeholder="task id"
          onChange={(e) => setTaskId(e.currentTarget.value)}
        />
        <Button onClick={deleteTodolist}>delete</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
export const UpdateTaskTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  const [todolistId, setTodolistId] = useState<string>('');
  const [taskId, setTaskId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<number>(0);
  const [priority, setPriority] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  const updateTitleTodolist = useCallback(() => {
    api
      .updateTaskTodolists(todolistId, taskId, {
        title,
        description,
        status,
        priority,
        startDate,
        deadline,
      })
      .then(({ data }) => {
        setState(data);
      });
  }, [todolistId, taskId, title, description, status, priority, startDate, deadline]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={todolistId}
          placeholder="todolist id"
          onChange={(e) => setTodolistId(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={taskId}
          placeholder="task id"
          onChange={(e) => setTaskId(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <Input
          type="text"
          value={String(status)}
          placeholder="status"
          onChange={(e) => setStatus(+e.currentTarget.value)}
        />
        <Input
          type="text"
          value={String(priority)}
          placeholder="priority"
          onChange={(e) => setPriority(+e.currentTarget.value)}
        />
        <Button onClick={updateTitleTodolist}>update task</Button>
      </div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
