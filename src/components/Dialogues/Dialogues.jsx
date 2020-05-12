import React from 'react'
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/Dialogues";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import requiredField, {maxLengthCreator} from "../../Helpers/validators/validator";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialoguesPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let NewMessageText = props.dialoguesPage.newMessageText;

    let addNewMessageFromForm = (values) => {
        props.sendMessage(values.newMessageBody)
    };


    return (
        <div>
            <h3>This page is under developing</h3>
            <div className={s.dialogues}>
                <div className={s.dialoguesItems}>
                    <p>avatar</p>
                    {dialoguesElements}

                </div>

                <div className={s.messages}>
                    <div>
                    {messagesElements}
                    </div>
                    <AddMessageReduxForm onSubmit={ addNewMessageFromForm } />
                </div>
            </div>
        </div>

    )
};
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
       <form onSubmit={ props.handleSubmit }>
           <div>
               <Field component = {TextArea}
                      validate = {[requiredField, maxLength50]}
                      name = 'newMessageBody' placeholder='Please, enter your message' />
           </div>
           <div>
               <button>send message</button>
           </div>
       </form>
    )
};
const AddMessageReduxForm = reduxForm({form: 'addNewMessageForm'})(AddMessageForm);

export default Dialogues;