import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import {sendMessagCreator, updateNewMessageBodyCreator} from '../reduc/dialogs-reducer'
const Dialogs = (props) => {
    let state = props.store.getState().dialogs;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} src = {dialog.src} alt = {dialog.alt}/>)
    let messageElements = state.messagesData.map(message => <MessageItem id = {message.id} text = {message.text}   />)
    let newMessagBody = state.newMessagBody;
    let onSendMessagClick = () => {
        props.store.dispatch(sendMessagCreator())
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
         <div className = {style.dialogs}>
             <div className = {style.dialogsItems}>
                 { dialogsElements }
             </div>
             <div className = {style.messages}>
                 <div>{ messageElements}</div>
                 <div>
                     <div ><textarea  onChange = {onNewMessageChange} value = {newMessagBody} placeholder=''></textarea></div>
                     <div><button onClick={onSendMessagClick} >send</button></div>
                 </div>
             </div> 
         </div>
        
        )
}
export default Dialogs