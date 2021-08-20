import React, { useEffect, useState, useRef ,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid'


const Button = ({listInput, setListInput,reverseDelete}) => {


    //delete channel function
   
    const submitList = (e) => {
        e.preventDefault()
        const id = uuidv4()
        const submitInput = {
            id: id,
            listValue: listInput
        }
        if(listInput) {
            localStorage.setItem("inputValue",JSON.stringify(submitInput));
            
            alert('channel has been  save to local storage')
        }
         
         else {
             alert('please add item to save')
         }
    }

    const reverseChange=()=>{
        setListInput('')
    }
  
    return (
        <div className="button">
            <div className="flexButton">
            <button data-cy="btn-cancel" className="buttons--cancel focus:outline-none btn" role="button" onClick={reverseChange} >Cancel</button>
            <button data-cy="btn-apply" className="buttons--apply focus:outline-none btn"  onClick={submitList}>Apply</button>
            </div>
        </div>
    )
}

export default Button
