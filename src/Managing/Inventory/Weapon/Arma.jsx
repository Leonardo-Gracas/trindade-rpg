import React from 'react'

const Arma = ({ item, describer, player, id, removeItem }) => {
    
    // Calculando dano
    let dano = item.danoBase
    if(item.manuseioFract != 0){
        dano += player.pericia / item.manuseioFract
    }
    if(item.forcaFract != 0){
        dano += player.corpo.forca / item.forcaFract
    }
    if(item.furtividadeFract != 0){
        dano += player.corpo.furtividade / item.furtividadeFract
    }
    dano = Math.floor(dano)

    describer.damageRanges.forEach(element => {
        if (dano >= element.min && dano <= element.max) {
            item.dano = element.result
            return
        }
    });
    return (
        <div className='border-bottom pb-2 pt-1'>
            <div className='d-flex justify-content-between'>
                <h4>{item.nome}</h4>
                <div className='px-1'>
                    <button className='btn btn-close' onClick={() => removeItem(id)}></button>
                </div>

            </div>

            <p className='mb-0'>tipo: {item.tipo}</p>
            <p className='mb-0'>uso: {item.uso}</p>
            <p>dano: {item.dano}</p>
        </div>
    )
}

export default Arma