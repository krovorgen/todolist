import { appReducer, InitialStateType } from '../app-reducer';
import { setStatusAppAC } from '../../actions/app-actions';

let initialState: InitialStateType;

beforeEach(() => {
  initialState = {
    status: 'idle',
  };
});

test('change status app on loading', () => {
  const endState = appReducer(initialState, setStatusAppAC('loading'));

  expect(initialState.status).toBe('idle');
  expect(endState.status).toBe('loading');
});
