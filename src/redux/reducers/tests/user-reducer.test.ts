import { userReducer } from '../user-reducer';

test('user reducer should increment only age', () => {
  const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

  const endState = userReducer(startState, { type: 'INCREMENT-AGE' });

  expect(startState.age).toBe(20);
  expect(startState.childrenCount).toBe(2);
  expect(endState.age).toBe(21);
  expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
  const startState = { age: 20, childrenCount: 2, name: 'Dimych' };
  const endState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT' });

  expect(startState.age).toBe(20);
  expect(startState.childrenCount).toBe(2);
  expect(endState.age).toBe(20);
  expect(endState.childrenCount).toBe(3);
});

test('user reducer should change name of user', () => {
  const startState = { name: 'Dimych', age: 20, childrenCount: 2 };
  const newName = 'Viktor';
  const endState = userReducer(startState, { type: 'CHANGE-NAME', newName: newName });

  expect(startState.name).toBe('Dimych');
  expect(endState.name).toBe(newName);
});

// test('will give an error', () => {
//   const startState = { age: 20, childrenCount: 2, name: 'Dimych' };
//   const endState = userReducer(startState, { type: 'error' });
//
//   expect(endState).toThrowError("I don't understand this type");
// });
