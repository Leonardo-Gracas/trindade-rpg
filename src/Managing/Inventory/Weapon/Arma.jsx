import React from 'react'

const Arma = ({ item, describer, player, id, removeItem }) => {
  item.proporcao = describer.armas.tamanhos[item.tamanho] + ', ' + describer.armas.pesos[item.peso]
  let dano = 0
  item.calcDamage.forEach(calc => {
    if (calc[0] == 'pericia') {
      dano += player.pericia * calc[1]
    } else {
      dano += player.corpo[calc[0]] * calc[1]
    }
  });
  dano = Math.floor(dano)

  describer.damageRanges.forEach(element => {
    if (dano >= element.min && dano <= element.max) {
      item.dano = element.result
      return
    }
  });

  item.acoes = describer.armas.acoes.map((act, i) => {
    let esf = Math.floor(act.calcPeso[item.peso] + act.calcTamanho[item.tamanho])

    return {
      nome: act.nome,
      esforco: esf
    }
  })
  return (
    <div className='border-bottom pb-2 pt-1'>
      <div className='d-flex justify-content-between'>
        <h4>{item.nome}</h4>
        <div className='px-1'>
          <button className='btn btn-close' onClick={() => removeItem(id)}></button>
        </div>

      </div>

      <p className='mb-0'>{item.tipo} - {item.uso}</p>
      <p>{item.proporcao}</p>
      <p>Dano: {item.dano}</p>
      {item.acoes.map((act, i) => {
        return <div key={i}>
          <p className='mb-0'>{act.nome} - {act.esforco}</p>
        </div>
      })}
    </div>
  )
}

export default Arma