import React from 'react';
import {sendTextMessageActionCreator} from "../../redux/dialogues_reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

/*const DialoguesContainer = () => {
    return <StoreContext.Consumer>
        {
       (store) => {
          let state = store.getState().dialoguesPage;
          let onSendMessageClick = () => {
             store.dispatch(sendTextMessageActionCreator());
          };
          let onNewMessageChange = (text) => {
             store.dispatch(updateNewMessageTextCreator(text));
          };
          return <Dialogues updateNewMessageText={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialoguesPage={state}/>
       }
    }
    </StoreContext.Consumer>
    };*/

let mapStateToProps =(state) => {
return {
    dialoguesPage: state.dialoguesPage,
}
};
let mapDispatchToProps =(dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendTextMessageActionCreator(newMessageBody))
        }
    }
};

/*compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogues);

let authRedirectComponent = withAuthRedirectComponent(Dialogues);

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogues);