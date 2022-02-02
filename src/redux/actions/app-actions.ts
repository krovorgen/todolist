import { RequestStatusType } from '../../types';

export enum AppActionsType {
  SetStatus = 'SetStatus',
}

export type ActionsType = ReturnType<typeof setStatusAppAC>;

export const setStatusAppAC = (status: RequestStatusType) =>
  ({ type: AppActionsType.SetStatus, payload: status } as const);
