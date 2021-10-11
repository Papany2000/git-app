import React from 'react';
import {NavLink}  from 'react-router-dom'
import style from './DialogsItem.module.css'
const DialogItem = (props) => {
  let dialogsData =[
    {id: 1, name: "Сергей", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
    {id: 2, name: "Толя",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
    {id: 3, name: "Саша",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
    {id: 4,name: "Юля",src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto",},
]
let dialogsElements = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} src = {dialog.src} alt = {dialog.alt}/>)
    let path ="/dialogs/" + props.id
    return  <div className = {style.dialog + ' ' + style.active}>
              <img   className = {style.dialogsImage} src = {props.src} alt = {props.alt} />
              <NavLink to ={path}>{props.name}</NavLink> 
            </div>
}
export default DialogItem