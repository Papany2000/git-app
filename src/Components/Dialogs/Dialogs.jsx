import React from 'react';
import style from './Dialogs.module.css'
import {NavLink}  from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return  <div className = {style.dialog + ' ' + style.active}>
              <img   className = {style.dialogsImage} src = {props.src} alt = {props.alt} />
              <NavLink to ={path}>{props.name}</NavLink> 
            </div>
}

const MessagItem = (props) => { 
    return <div className = {style.messag}>
        <p className = {style.messagText}>{props.text}</p>   
    </div> 
    
}
const Dialogs = (props) => {
    let dialogsData =[
            {id: 1, name: "Сергей", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
            {id: 2, name: "Толя",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
            {id: 3, name: "Саша",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
            {id: 4,name: "Юля",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
    ]
    let dialogsElements = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} src = {dialog.src} alt = {dialog.alt}/>)

    let messagesData = [
        {id: 1, text:  "Привет!" , src: "", alt: "foto", },
        {id: 2, text:  " Давно не виделись." , src: "", alt: "foto", },
        {id: 3, text:  "Я очень хочу с вами поговорить" , src: "", alt: "foto", },
    ]
    let messageElements = messagesData.map(message => <MessagItem text = {message.text}   />)
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