import React from 'react'
import './user.css'

const User = ({id,nome,cpf,nascimento,telefone, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{nome}</span>
            <span>{cpf}</span>
            <span>{nascimento}</span>
            <span>{telefone}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}



export default User
