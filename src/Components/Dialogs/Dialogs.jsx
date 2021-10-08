import React from 'react';
import style from './Dialogs.module.css'
const Dialogs = (props) => {
    return(
         <div className = {style.dialogs}>
             <div className = {style.dialogsItems}>
                <div className = {style.dialog + ' ' + style.active}>
                    
                    Сергей
                </div>
                <div className = {style.dialog}>
                    Толя
                </div>
                <div className = {style.dialog}>
                    Саша
                </div>
                <div className = {style.dialog}>
                    Юля
                </div>

             </div>
             <div className = {style.messages}>
                <div className = {style.messag}>
                     <p><img className = {style.messagImage} src = "https://media.istockphoto.com/photos/smart-young-white-boy-using-tablet-in-casual-outfit-isolated-over-picture-id1298623407?b=1&k=20&m=1298623407&s=170667a&w=0&h=kb3IROPpIFBfRIwVc6UniHrp6qDHA5qR02AomzEUbhs=" alt ="foto"/></p>
                     <p className = {style.messagText}>Привет!</p>   
                 </div> 
                <div className = {style.messag}>
                    <p><img className = {style.messagImage} src = "https://media.istockphoto.com/photos/smiling-mixed-race-girl-holding-an-apple-and-broccoli-in-her-hands-picture-id1299129816?b=1&k=20&m=1299129816&s=170667a&w=0&h=sMteOvzozrVGRPuXbaV4EonAp7Db0VnX8Scy7913zM0=" alt ="foto"/></p>
                    <p className = {style.messagText}>Привет! Давно не виделись</p>     
                 </div> 
                <div className = {style.messag}>
                     <p><img className = {style.messagImage} src = "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=" alt ="foto"/></p>
                     <p className = {style.messagText}>Привет! Я очень хочу с вами поговорить.</p>    
                </div> 
             </div>
        </div>
        )
}
export default Dialogs