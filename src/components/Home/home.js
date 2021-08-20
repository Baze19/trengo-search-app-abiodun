import React, { useEffect, useState, useRef, useContext } from 'react'
import Listing from '../list/List'
import Button from '../Button/Button'
import { ChannelContext } from '../context/Context'

const Home = () => {
    const [channelList, setChannelList] = useContext(ChannelContext);
    //delete channel function
    const deleteChannel = (id) => {
        setChannelList(channelList.filter(channel => channel.id !== id));
        setDeleteToggle(true)

    }
    const [deleteToggle, setDeleteToggle] = useState(false);
    const [inputValue, setInputValue] = useState(false);
    const [listInput, setListInput] = useState('');
    const inputEl = useRef("");

    useEffect(() => {
        if (listInput.length > 0) {
            setInputValue(true)
        }
        else {
            setInputValue(false)
        }
    }, [listInput])


    const changeInput = (e) => {
        setListInput(inputEl.current.value)
    }




    return (
        <div>
            <div className='channel-search'>
                <div  >
                    <i className="fas fa-search  channel-search__icon"  ></i>
                    <input
                        ref={inputEl}
                        data-cy="channel-search" type="text"
                        placeholder="Add Channel...." className="channel-input" value={listInput} onChange={changeInput}
                    ></input>
                </div>
            </div>
            <Listing deleteChannel={deleteChannel} listInput={listInput} setListInput={setListInput} />
            {inputValue || deleteToggle ? <Button listInput={listInput} setListInput={setListInput} /> : ''}
        </div>
    )
}

export default Home
