import React from "react";
import * as C from './style';
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md'

const ChatHeader = ({ PhotoURL, name }) => {
  return(
    <C.Container>
        <C.UserInfo>
        {PhotoURL ? <C.Avatar src={PhotoURL} /> : <MdPerson />}
            {name ? <C.Name>{name}</C.Name> : <p>(this email name does not exist)</p>}
        </C.UserInfo>
        <C.Options>
          <MdSearch />
          <MdMoreVert />
        </C.Options>
    </C.Container>
  )  
};

export default ChatHeader;