import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/FiraBase';
import Loading from './components/loading'
import Login from './components/login'
import React from "react";
import * as C from './style/app';
import Sidebar from './components/sidebar';
import Chat from './components/chat';


const App = () =>{
    const [user, Setuser] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);

    useEffect(() =>{
        if(user){
            db.collection('users').doc(user.uid).set({
                email: user.email,
                ImageUser: user.photoURL,
            });
        };
    });

    if(Setuser) return <Loading/>
    if(!user) return <Login />
    return (
       <C.Container>
            <Sidebar setUserChat={setUserChat} userChat={userChat}/>
            <Chat  UserChat={userChat}/>
       </C.Container>
    )
};

export default App;





