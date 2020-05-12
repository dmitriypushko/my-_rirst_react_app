import React from 'react';
import './App.css';
import NavigationBar from './components/navbar/NavigationBar';
import News from "./components/news/News"
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings"
import {BrowserRouter, Route} from "react-router-dom";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/login";





const App = (props) => {

    return (
            <div className="app_wrapper">
                <HeaderContainer />
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route exact path='/dialogues' render={() => <DialoguesContainer  />} />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/music' render={ () => <Music />} />
                    <Route path='/users' render={() => <UsersContainer /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                    <Route path='/login' render={ () => <LoginPage /> } />

                </div>
            </div>
    );
};

export default App;
