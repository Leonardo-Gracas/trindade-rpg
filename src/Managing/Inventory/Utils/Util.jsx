import React from 'react'

const Util = ({ item, id, removeItem }) => {
    return (
        <div className='border-bottom pb-2 pt-2'>
            <div className='d-flex justify-content-between'>
                <h4>{item.nome} (x{item.quantidade})</h4>
                <div className='px-1'>
                    <button className='btn btn-close' onClick={() => removeItem(id)}></button>
                </div>
            </div>
            <p className='mb-0'>{item.descricao}</p>
            <p></p>
        </div>
    )
}

export default Util