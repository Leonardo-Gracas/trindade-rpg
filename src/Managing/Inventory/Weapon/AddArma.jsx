import React from 'react'

const AddArma = ({item, describer, add}) => {
    return (
        <div className='btn btn-light border w-100' onClick={() => add(item)}>
            <strong>{item.nome}</strong>
            <p>{describer.armas.tamanhos[item.tamanho]}, {describer.armas.pesos[item.peso]}</p>
            <span>Dano: {item.calcDamage.map((calc, j) => {
                if (j == item.calcDamage.length - 1) {
                    return <p key={j}>{calc[0]} * {calc[1]}</p>
                }
                return <p className='mb-0' key={j}>{calc[0]} * {calc[1]} + </p>
            })}</span>
        </div>
    )
}

export default AddArma