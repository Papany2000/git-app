
import Dialogs from './Dialogs'
import { sendMessag, updateNewMessageBody } from '../reduc/dialogs-reducer'
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogs
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessag, updateNewMessageBody})(Dialogs);


export default DialogsContainer