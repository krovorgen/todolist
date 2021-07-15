import React, { FC } from 'react';
import { ITodolistProps } from './types';

const Todolist: FC<ITodolistProps> = ({ title, todolistItemData }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {todolistItemData.map((todolist) => (
          <li key={todolist.id}>
            <input type="checkbox" checked={todolist.checked} />
            <span>{todolist.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Todolist;
