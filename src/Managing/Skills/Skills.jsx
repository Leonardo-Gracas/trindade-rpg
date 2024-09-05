import React from 'react'

const Skills = ({ player }) => {


    const nivelFormacao = ["", "Iniciante", "Especialista", "Mestre"]
    const nivelCompetenia = ["", "1d4", "1d6", "1d8"]

    console.log(player.habilidades)

    return (
        <div>
            {player.formacoes.map((item, i) => {
                return <div key={i}>
                    <div className='w-100 d-flex justify-content-between'>
                        <h4>{item.nome}</h4>
                        <button className='btn btn-outline-secondary'><i class="bi bi-pencil"></i></button>
                    </div>
                    <p>{nivelFormacao[item.nivel]}, {nivelCompetenia[item.nivel]}</p>
                    {i == player.formacoes.length - 1 ? true : <hr />}
                </div>
            })}
            <hr />
            <h4></h4>
            {player.habilidades.map((item, i) => {
                return <div>
                    <div className='text-start mb-3' key={i}>
                        <h4>{item.nome}</h4>
                        <p>{item.descricao}</p>
                    </div>
                </div>
            })

            }
        </div>
    )
}

export default Skills