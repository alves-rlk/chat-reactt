import React, { useEffect, useState } from 'react';
import * as C from './styled';
import { db } from '../../../services/FiraBase';
import { MdPerson } from 'react-icons/md';

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      if (user && users) {
        const userToQuery = users.find(usr => usr !== user?.email);
        if (userToQuery) {
          const userRef = db.collection('users').where('email', '==', userToQuery);
          const snapshot = await userRef.get();
          snapshot.forEach(doc => {
            setAvatar(doc.data()?.
            ImageUser);
          });
        }
      }
    };

    fetchAvatar();
  }, [user, users]);

  const handleNewChat = () => {
    const name = users.find(usr => usr !== user?.email)?.split('@')[0] || '';
    const userChat = {
      chatId: id,
      name,
      photoUrl: avatar || '',
    };

    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
      {avatar ? <C.Avatar src={avatar} /> : <MdPerson />}
      <C.Name>{users.find(usr => usr !== user?.email)?.split('@')[0]}</C.Name>
    </C.Container>
  );
};

export default SidebarChatsItem;
