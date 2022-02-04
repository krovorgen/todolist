import { RequestStatusType } from '../../types';

export enum AppActionsType {
  SetStatus = 'SetStatus',
  SetInitialized = 'SetInitialized',
}

export type ActionsType =
  | ReturnType<typeof setStatusAppAC>
  | ReturnType<typeof changeInitializedStatusAC>;

export const setStatusAppAC = (status: RequestStatusType) =>
  ({ type: AppActionsType.SetStatus, payload: status } as const);

export const changeInitializedStatusAC = (status: boolean) =>
  ({ type: AppActionsType.SetInitialized, payload: status } as const);
