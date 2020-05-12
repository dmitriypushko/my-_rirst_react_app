import profileReducer from "./profile_reducer";
import dialoguesReducer from "./dialogues_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello world!!', qtyLikes: 150},
                {id: 2, message: 'It is my first post', qtyLikes: 250},
                {id: 3, message: 'It is my second post', qtyLikes: 350},
                {id: 4, message: 'Another post from me', qtyLikes: 450}
            ],
            newPostText: 'dmitiry pushko',
            dialogues: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Vasya'},
                {id: 5, name: 'Nikola'},
                {id: 6, name: 'Homer'},
            ],
        },
        dialoguesPage: {
            messages: [
                {id: 100, message: "Hello, what's up, dude?"},
                {id: 101, message: "Hi, how are you?"},
                {id: 102, message: "Where you been?"},
                {id: 103, message: "Can i meet you?"}
            ],
            newMessageText: 'txt from state',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state was changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};
    export default store;
