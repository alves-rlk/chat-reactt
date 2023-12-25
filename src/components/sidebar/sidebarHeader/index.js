import React, { useEffect, useState } from "react";
import* as C from './style';
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md';
import * as EmailValidator from 'email-validator';
import { auth, db} from '../../../services/FiraBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';


const HeaderBar = ({ setUserImg }) =>{
    const [ user ] = useAuthState(auth);
    const refchat = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
    const [chatsSnapshot] = useCollection(refchat)
   

    function handlecreateChat(){
        const emailInput = prompt('type one email of one friend');

        if(!emailInput) return;

        if(!EmailValidator.validate(emailInput)){
            return alert('E-mail invalid!');
        }else if(emailInput == user.email){
            return alert('No type your E-mail!');
        }
        else if(chatExist(emailInput)){
            alert('Chat Exist');
        }
        db.collection('chats').add({
            users: [user.email, emailInput]
        })
    };

    const chatExist = (emailCheck) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailCheck)?.lenght > 0
    );

        };


  
    return(
        <C.Container>
            <C.Avatar 
                src={user.photoURL} 
                onClick={() => [auth.signOut(), setUserImg(undefined)]}
            ></C.Avatar>
            <C.Options >
                <MdDonutLarge/>
                <MdChat 
                    onClick={handlecreateChat}
                />
                <MdMoreVert />
            </C.Options>
          
        </C.Container>
    );
        
};


export default HeaderBar;