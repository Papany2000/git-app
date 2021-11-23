import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
const Dialogs = (props) => {
    let state = props.dialogs;
    let dialogsElements = state.dialogsData.map((dialog, index) => <DialogItem key = {index} name = {dialog.name} id = {dialog.id} src = {dialog.src} alt = {dialog.alt}/>)
    let messageElements = state.messagesData.map((message, index) => <MessageItem key = {index} id = {message.id} text = {message.text}   />)
    let newMessagBody = state.newMessagBody;

    let onSendMessagClick = () => {
        props.sendMessag()
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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