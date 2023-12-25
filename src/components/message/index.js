import React, { useState } from "react";
import * as C from './styled'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../services/FiraBase";


const MessageChat = ({ message, user }) => {
    const [ userLoggedin ] = useAuthState(auth);
    
    return(
       <C.Container>
            <C.Line className={userLoggedin?.email == user ? 'me' : ''}>
              <C.Content>
                <C.Message>{message.message}</C.Message>
                <C.MessageDate>
                    {new Date(message?.timestamp).toLocaleString()}
                </C.MessageDate>
              </C.Content>
            </C.Line>  
       </C.Container> 
    )
};

export default MessageChat;