import React from 'react'

const AddUtil = ({ item, add }) => {
    return (
        <div className='btn btn-light border w-100 h-100' onClick={() => add(item)}>
            <strong>{item.nome}</strong>
            <p>{item.descricao}</p>
        </div>
    )
}

export default AddUtil