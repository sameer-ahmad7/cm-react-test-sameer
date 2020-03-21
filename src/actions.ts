import { EReduxActionTypes, IReduxBaseAction } from "./rootReducer";

export interface IReduxToggleMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.TOGGLE_MESSAGE;
}

export interface IReduxChatMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.CHAT_MESSAGE;  
}

export function toggleMessage(): IReduxToggleMessageAction {
  return {
    type: EReduxActionTypes.TOGGLE_MESSAGE
  };
}

export function showChatMessage(chatMessage:any):IReduxChatMessageAction{
  return{
    type:EReduxActionTypes.CHAT_MESSAGE,
    payload:chatMessage
  }
} //Defined this action which will be dispatched once we have result of user input
