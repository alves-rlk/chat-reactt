import React, { useState } from "react";
import * as C from './style';
import firebase from 'firebase/compat/app';
import { auth, db } from '../../services/FiraBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdSend } from 'react-icons/md'


const ChatFooter = ( {ChatId}) => {
  const [Message, setMessage] = useState('');
  const [user] = useAuthState(auth);

  const HandleSendMessage = (e) => {
    if(Message.length > 0){
      e.preventDefault();

      db.collection('chats').doc(ChatId).collection('messages').add({
        message: Message,
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      
      setMessage('')
  
    }
  };

  return(
    <C.Container>
      <C.Form onSubmit={HandleSendMessage}>
      <C.Input placeholder="Type the message" onChange={(e) => setMessage(e.target.value)} value={Message}/>
      <MdSend onClick={HandleSendMessage}/>
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;