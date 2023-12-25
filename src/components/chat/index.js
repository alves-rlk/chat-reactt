import React from "react";
import ChatHeader from "../chatHeader";
import ChatBody from "../chatBody";
import * as C from './style';
import ChatFooter from "../chatFooter";
import PageDefault from "../default";

const Chat = ({ UserChat }) => {
  if(!UserChat) return <PageDefault />

  return(
    <C.Container>
        <ChatHeader PhotoURL={UserChat.photoUrl} name={UserChat?.name}/>
        <ChatBody ChatId={UserChat?.chatId}/>
        <ChatFooter ChatId={UserChat.chatId}/>
    </C.Container>
  )  
};

export default Chat;