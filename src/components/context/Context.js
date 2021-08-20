import React, { useState , createContext} from 'react';
import {FaRegUser} from 'react-icons/fa';
import { FaWhatsapp,FaUserAlt,FaPhoneAlt,FaPhone } from "react-icons/fa";

export const ChannelContext = createContext()

 export const Context = props => {
     const [channelList,setChannelList] = useState([
         {
             id:1,
             img:FaWhatsapp,
             name:'WhatsappBusiness'
         },
         {
            id:2,
            img:FaUserAlt,
            name:'UserAbiodun'
        },
        {
            id:3,
            img:FaWhatsapp,
            name:'Abiodun'
        },
        {
            id:4,
            img:FaRegUser,
            name:'Abiodun'
        },
        {
            id:5,
            img:FaPhoneAlt,
            name:'Call center'
        },
     ]);
    return (
        <ChannelContext.Provider value={[channelList,setChannelList]}>
            {props.children}
        </ChannelContext.Provider>
    )
}


