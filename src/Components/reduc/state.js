const ADD_POST = 'ADD-Post';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {
        container: {
            postData:
                [
                    { id: 1, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },
                    { id: 2, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },
                ],
            newPostText: '',
        },

        dialogs: {
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
        },

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(obserwer) {
        this._callSubscriber = obserwer;//obserwer callbak function наблюдатель что то как  addEventListener
    },
   
    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 4,
                messeg: this._state.container.newPostText ,
                name: 'Sergey Y.',
                src: "https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: 'foto'
            }
            this._state.container.postData.push(newPost);
            this._state.container.newPostText = '';
            this._callSubscriber(this._state);   
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.container.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogs.newMessagBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogs.newMessagBody;
            this._state.dialogs.messagesData.push( {id: 4, text: body,})
            this._state.dialogs.newMessagBody = '';
            this._callSubscriber(this.state);
        }
    }

}
export default store;
export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,}) 
export const sendMessagCreator = () => ({ type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})    
