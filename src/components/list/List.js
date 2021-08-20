import React, { useContext, useState } from 'react';
import Listdetails from './Listdetails';
import { ChannelContext } from '../context/Context'

const List = ({ deleteChannel, listInput, setListInput }) => {
    const [channelList, setChannelList] = useContext(ChannelContext)
    console.log(channelList)
    return (
        <div className='listing'>
            {channelList.filter((val)=>{
                if(listInput===''){
                    return val
                }
                else if(val.name.toLowerCase().includes(listInput.toLowerCase())){
                    return val
                }
            }).map(channels => (
                <Listdetails name={channels.name} channel={channels} key={channels.id}
                    deleteChannel={deleteChannel}   
                />
            ))}
        </div>
    )
}

export default List
