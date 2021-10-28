import React from 'react';
import Dialogs from './Dialogs'
import { sendMessagCreator, updateNewMessageBodyCreator } from '../reduc/dialogs-reducer'
import StoreContext from '../../StoreContext';
const DialogsContainer = () => {
  
    return <StoreContext.Consumer> 
        {
        (store) => {
            let state = store.getState().dialogs;

            let onSendMessagClick = () => {
                store.dispatch(sendMessagCreator())
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
      return      <Dialogs updateNewMessageBody={onNewMessageChange} sendMessag={onSendMessagClick} dialogs={state} />
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer