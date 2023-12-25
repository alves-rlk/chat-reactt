import React from "react";
import { MdMessage } from 'react-icons/md';
import * as C from './styled';


const PageDefault = () => {
    return(
        <C.Container>
            <C.Svg>
                 <MdMessage />
            </C.Svg>
           
            <C.Title>
                Chat Page
            </C.Title>
            <C.Info>
            Now you can send and receive messages without having to keep your cell phone connected to the internet
            </C.Info>
        </C.Container>
    )
};

export default PageDefault;