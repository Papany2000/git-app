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
      newMessagBody: '',
  
}
  
  

 const dialogsReducer = (state = initialState, action) => {
     switch(action.type){
         case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagBody = action.body;
            return state;
         case SEND_MESSAGE:
            let body = state.newMessagBody;
            state.messagesData.push( {id: 4, text: body,})
            state.newMessagBody = '';
            return state;
         default:
            return state;
     }
}
export default dialogsReducer;
export const sendMessagCreator = () => ({ type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})    