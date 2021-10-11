import React from 'react';
import style from './MessageItem.module.css'

const MessageItem = (props) => { 
    return <div className = {style.messag}>
        <p className = {style.messagText}>{props.text}</p>   
    </div> 
    
}
export default MessageItem