
import Dialogs from './Dialogs'
import { sendMessagCreator, updateNewMessageBodyCreator } from '../reduc/dialogs-reducer'
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body) =>{ dispatch(updateNewMessageBodyCreator(body))},
        sendMessag: () =>{ dispatch(sendMessagCreator())}   
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer