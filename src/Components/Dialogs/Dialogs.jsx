import React from 'react';
import style from './Dialogs.module.css'
import {NavLink}  from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return  <div className = {style.dialog + ' ' + style.active}>
           <NavLink to ={path}>{props.name}</NavLink> 
  </div>
}

const MessagItem = (props) => { 
    return <div className = {style.messag}>
        <p><img className = {style.messagImage}  src = {props.src} alt = {props.alt}  /></p>
        <p className = {style.messagText}>{props.text}</p>   
    </div> 
    
}
const Dialogs = (props) => {
    return(
         <div className = {style.dialogs}>
             <div className = {style.dialogsItems}>
                <DialogItem name = "Сергей" id = "1" />
                <DialogItem name = "Толя" id = "2" />
                <DialogItem name = "Саша" id = "3" />
                <DialogItem name = "Юля" id = "4" />
             </div>
             <div className = {style.messages}>
                <MessagItem text = "Привет!"  src = "https://media.istockphoto.com/photos/smart-young-white-boy-using-tablet-in-casual-outfit-isolated-over-picture-id1298623407?b=1&k=20&m=1298623407&s=170667a&w=0&h=kb3IROPpIFBfRIwVc6UniHrp6qDHA5qR02AomzEUbhs=" alt = "foto"  />
                <MessagItem text = "Привет! Давно не виделись."  src =  "https://media.istockphoto.com/photos/smiling-mixed-race-girl-holding-an-apple-and-broccoli-in-her-hands-picture-id1299129816?b=1&k=20&m=1299129816&s=170667a&w=0&h=sMteOvzozrVGRPuXbaV4EonAp7Db0VnX8Scy7913zM0=" alt ="foto"  />
                <MessagItem text = "Привет! Я очень хочу с вами поговорить"  src = "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=" alt ="foto"   /> 
             </div> 
         </div>
        
        )
}
export default Dialogs