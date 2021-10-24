const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state, action) => {
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