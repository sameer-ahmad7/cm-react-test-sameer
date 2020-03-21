export const initialState: AppState = {
  showMessage: false,
  chatMessage:""
};

export enum EReduxActionTypes {
  TOGGLE_MESSAGE = "TOGGLE_MESSAGE",
  CHAT_MESSAGE="CHAT_MESSAGE"
}

export function rootReducer(
  state: AppState = initialState,
  action: IReduxBaseAction
) {
  switch (action.type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      return { ...state, showMessage: !state.showMessage };
     // case EReduxActionTypes.CHAT_MESSAGE:
     //   return {...state,chatMessage:action.payload}
    default:
      return state;
  }
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
  payload?:any;
}



export interface AppState {
  showMessage: boolean;
  chatMessage:string;
}
