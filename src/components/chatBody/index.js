import React, { useEffect, useRef } from "react";
import { db } from '../../services/FiraBase';
import * as C from './style';
import { useCollection} from 'react-firebase-hooks/firestore';
import Message from '../message';

const ChatBody = ({ ChatId }) => {
  const [messageRes] = useCollection(
    db
    .collection('chats')
    .doc(ChatId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
  )

  const refbody = useRef('')

  useEffect(() => {
    if(refbody.current.scrollHeight > refbody.current.offsetHeight){
      refbody.current.scrollTop =
      refbody.current.scrollHeight - refbody.current.offsetHeight
    }
  }, [messageRes])

 
 
  return(
      <C.Container>
    
        {messageRes?.docs.map((message) => {
          return(
            <Message 
            key={message.id}
            user={message.data().user}
            message={{
              message: message.data().message,
              timestamp: message.data().timestamp?.toDate().getTime()
            }}
          />
          )
        
        })}
      </C.Container>
  )  
};

export default ChatBody;