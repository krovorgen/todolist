import { RequestStatusType } from '../reducers/app-reducer';

export enum AppActionsType {
  SetStatus = 'SetStatus',
}

export type ActionsType = ReturnType<typeof SetStatusAppAC>;

export const SetStatusAppAC = (status: RequestStatusType) =>
  ({ type: AppActionsType.SetStatus, payload: status } as const);
