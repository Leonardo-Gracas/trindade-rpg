import React, { useState } from 'react'
import EditSkill from './EditSkill'
import EditFormacao from './EditFormacao'
import AddSkill from './AddSkill'
import AddFormacao from './AddFormacao'

const Skills = ({ player, setPlayer }) => {

    const [editModal, setEditModal] = useState(<></>)

    const nivelFormacao = ["", "Iniciante", "Especialista", "Mestre"]
    const nivelCompetenia = ["", "1d4", "1d6", "1d8"]

    const handleEditSkills = (index) => {
        const model = player.habilidades[index]

        const save = (newModel) => {
            const newSkills = player.habilidades
            newSkills[index] = newModel

            setPlayer(prev => ({
                ...prev,
                habilidades: newSkills
            }))
        }

        const del = () => {
            const newSkills = player.habilidades
            newSkills.splice(index, 1)

            setPlayer(prev => ({
                ...prev,
                habilidades: newSkills
            }))
        }

        setEditModal(<EditSkill canShow={true} close={() => setEditModal()} model={model} save={save} del={del} />)
    }

    const handleAddSkill = () => {
        const save = (newModel) => {
            setPlayer(prev => ({
                ...prev,
                habilidades: [...player.habilidades, newModel]
            }))
        }

        setEditModal(<AddSkill close={() => setEditModal()} save={save} />)
    }

    const handleAddFormacao = () => {
        const save = (newModel) => {
            setPlayer(prev => ({
                ...prev,
                formacoes: [...player.formacoes, newModel]
            }))
        }

        setEditModal(<AddFormacao close={() => setEditModal()} save={save} />)
    }

    const handleEditFormacoes = (index) => {
        const model = player.formacoes[index]

        const save = (newModel) => {
            const newFormacoes = player.formacoes
            newFormacoes[index] = newModel

            setPlayer(prev => ({
                ...prev,
                formacoes: newFormacoes
            }))
        }

        const del = () => {
            const newFormacoes = player.formacoes
            newFormacoes.splice(index, 1)

            setPlayer(prev => ({
                ...prev,
                formacoes: newFormacoes
            }))
        }

        setEditModal(<EditFormacao canShow={true} close={() => setEditModal()} model={model} save={save} del={del} />)
    }

    return (
        <>
            <div className='d-flex flex-column'>
                {player.formacoes.map((item, i) => {
                    return <div key={i}>
                        <div className='w-100 d-flex justify-content-between'>
                            <h4>{item.nome}</h4>
                            <button className='btn btn-outline-secondary border-0' onClick={() => handleEditFormacoes(i)}><i class="bi bi-pencil"></i></button>
                        </div>
                        <p>{nivelFormacao[item.nivel]}, {nivelCompetenia[item.nivel]}</p>
                        
                    </div>
                })}
                <div className='w-100 text-end'>
                    <button className='btn btn-outline-success' onClick={handleAddFormacao}>Adicionar formação</button>
                </div>
                <hr />
                <h4></h4>
                {player.habilidades.map((item, i) => {
                    return <div>
                        <div className='text-start mb-3' key={i}>
                            <div className='w-100 d-flex justify-content-between'>
                                <h4>{item.nome}</h4>
                                <button className='btn btn-outline-secondary border-0' onClick={() => handleEditSkills(i)}><i class="bi bi-pencil"></i></button>
                            </div>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                })
                }
                <div className='w-100 text-end'>
                    <button className='btn btn-outline-success' onClick={handleAddSkill}>Adicionar Habilidade</button>
                </div>
                {editModal}
            </div>
        </>
    )
}

export default Skills