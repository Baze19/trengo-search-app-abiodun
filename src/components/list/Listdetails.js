
import React, { useContext, } from 'react';
import { FaList } from "react-icons/fa";
import { ChannelContext } from '../context/Context'

const Listdetails = ({ name, channel, deleteChannel,  listInput }) => {
    console.log(listInput)

    return (
        <div className='channel-list-item'>
            

            <div className='channel-list-info'>
                <span className='channel-list-handle '>
                    <FaList />
                </span>
                <span className="channel-icon-tile">
                    <channel.img />
                </span>{''}
                {name}
            </div>

            <div>
                <button className="channel-list-action"  onClick={() => deleteChannel(channel.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Listdetails
