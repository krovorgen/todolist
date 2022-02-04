export enum AuthActionsType {
  SetStatusLogged = 'SetStatusLogged',
}

export type ActionsType = ReturnType<typeof setLoggedStatusAC>;

export const setLoggedStatusAC = (status: boolean) =>
  ({ type: AuthActionsType.SetStatusLogged, payload: status } as const);
