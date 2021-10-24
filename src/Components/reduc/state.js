import containerReducer from './container-reducer'
import dialogsReducer from './dialogs-reducer'

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
        this._state.container = containerReducer(this._state.container, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._callSubscriber(this._state); 
       
    }

}
export default store;


