const sendTextMessage = 'SEND-TEXT-MESSAGE';

let initialState = {
    dialogues: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Nikola'},
        {id: 6, name: 'Homer'},
    ],
    messages: [
        {id: 100, message: "Hello, what's up, dude?"},
        {id: 101, message: "Hi, how are you?"},
        {id: 102, message: "Where you been?"},
        {id: 103, message: "Can i meet you?"}
    ]
};

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type){
        case sendTextMessage: {
            let text = {
                message: action.newMessageBody,
            };
         return {
                ...state,
                messages: [...state.messages, text]
            };
        }
    default:
        return state;

}
};

export const sendTextMessageActionCreator = (newMessageBody) => {
    return {
        type: sendTextMessage, newMessageBody
    };
};

export default dialoguesReducer;
