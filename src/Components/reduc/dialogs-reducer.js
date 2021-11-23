const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
   
      dialogsData:
          [
              { id: 1, name: "Сергей", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
              { id: 2, name: "Толя", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
              { id: 3, name: "Саша", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
              { id: 4, name: "Юля", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
          ],
      messagesData: [
          { id: 1, text: "Привет!" },
          { id: 2, text: " Давно не виделись." },
          { id: 3, text: "Я очень хочу с вами поговорить" }
      ],
      newMessagBody: 'Привет',
  
}

 const dialogsReducer = (state = initialState, action) => {
     switch(action.type){
         case UPDATE_NEW_MESSAGE_BODY:
              return {
                  ...state,
            newMessagBody: action.body
        }
         case SEND_MESSAGE:
            let body = state.newMessagBody;
               return {...state,
            newMessagBody: '', 
            messagesData: [ ...state.messagesData, {id: 4, text: body,}]
        }
         default:
            return state;
     }
}
export default dialogsReducer;
export const sendMessag = () => ({ type:SEND_MESSAGE})
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})    