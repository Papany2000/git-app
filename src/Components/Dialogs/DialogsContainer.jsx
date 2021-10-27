import React from 'react';
import Dialogs from './Dialogs'
import {sendMessagCreator, updateNewMessageBodyCreator} from '../reduc/dialogs-reducer'
const DialogsContainer = (props) => {
    let state = props.store.getState().dialogs;
  
    let onSendMessagClick = () => {
        props.store.dispatch(sendMessagCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
      <Dialogs updateNewMessageBody = { onNewMessageChange} sendMessag = { onSendMessagClick} dialogs = {state} />
        )
}
export default DialogsContainer