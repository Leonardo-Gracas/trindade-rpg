import React from 'react'

const AddArma = ({ item, add }) => {
    let danoText = [item.danoBase]
    if (item.manuseioFract != 0) {
        danoText.push("Manuseio" + (item.manuseioFract == 1 ? "" : "/" + item.manuseioFract))
    }
    if (item.forcaFract != 0) {
        danoText.push("Força" + (item.forcaFract == 1 ? "" : "/" + item.forcaFract))
    }
    if (item.furtividadeFract != 0) {
        danoText.push("Furtividade" + (item.furtividadeFract == 1 ? "" : "/" + item.furtividadeFract))
    }

    return (
        <div className='btn btn-light border w-100 h-100 d-flex flex-column' onClick={() => add(item)}>
            <strong>{item.nome}</strong>

            <span>Dano: {
                danoText.map((e, i) => {
                    if (i != danoText.length - 1) {
                        return <span className='mb-0' key={i}>{e} + </span>
                    }
                    return <span className='mb-0' key={i}>{e}</span>
                })
            }
            </span>
        </div>
    )
}

export default AddArma