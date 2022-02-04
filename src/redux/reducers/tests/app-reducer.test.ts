import {
  appReducer,
  changeInitializedStatusAC,
  InitialStateType,
  setStatusAppAC,
} from '../app-reducer';

let initialState: InitialStateType;

beforeEach(() => {
  initialState = {
    status: 'idle',
    initialized: false,
  };
});

test('change status app on loading', () => {
  const endState = appReducer(initialState, setStatusAppAC('loading'));

  expect(initialState.status).toBe('idle');
  expect(endState.status).toBe('loading');
});

test('change initialized status app', () => {
  const endState = appReducer(initialState, changeInitializedStatusAC(true));

  expect(initialState.initialized).toBeFalsy();
  expect(endState.initialized).toBeTruthy();
});
