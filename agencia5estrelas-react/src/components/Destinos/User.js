import React from 'react'
import './user.css'

const User = ({id,lugar,valor,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{lugar}</span>
            <span>{valor}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}



export default User
