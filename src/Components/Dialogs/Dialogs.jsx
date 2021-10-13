import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} src = {dialog.src} alt = {dialog.alt}/>)

    let messageElements = props.state.messagesData.map(message => <MessageItem id = {message.id} text = {message.text}   />)
    return(
         <div className = {style.dialogs}>
             <div className = {style.dialogsItems}>
                 { dialogsElements }
             </div>
             <div className = {style.messages}>
                 { messageElements}
             </div> 
         </div>
        
        )
}
export default Dialogs