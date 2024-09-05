import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import AddSkillsModal from './AddSkillsModal'

const SetSkills = ({ player, update, rollback }) => {
    const [content, setContent] = useState(player.habilidades)
    const [showAdd, setShowAdd] = useState(false)

    // useEffect(() => {
    //     setContent(player.habilidades)
    // }, [player])

    const addSkill = (skill) => {
        setContent(prev => ([
            ...prev,
            skill
        ]))
    }

    const handleDeleteSkill = (index) => {
        const newList = content
        newList.splice(index, 1)

        setContent(prev => ([...newList]))
        update(prev => ({
            ...prev,
            habilidades: [...newList]
        }))
    }

    const handleFinish = () => {
        update(prev => ({
            ...prev,
            habilidades: [...content]
        }))
    }

    return (
        <div className='d-flex flex-column align-items-start' style={{ maxWidth: '100%' }}>
            <Card className='p-0'>
                <CardHeader>
                    <CardTitle>Habilidades</CardTitle>
                </CardHeader>
                <CardBody className='mx-2'>
                    <h4>Adicione as habilidades do personagem</h4>
                    <hr></hr>
                    <div className='overflow-y-auto' style={{ height: '20rem', maxHeight: '80%' }}>
                        {content.map((item, i) => {
                            return <div className='text-start mb-3' key={i}>
                                <h4>{item.nome}</h4>
                                <p>{item.descricao}</p>
                                <button className='btn btn-danger' onClick={() => handleDeleteSkill(i)}><i className="bi bi-trash3"></i></button>
                            </div>
                        })}
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-primary' onClick={() => setShowAdd(true)}>
                            Adicionar formação
                        </button>
                    </div>
                </CardBody>
            </Card>
            <div className='d-flex justify-content-between mt-3 w-100'>
                <button className='btn btn-danger' style={{ width: '150px' }} onClick={rollback}>Retornar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleFinish}>Finalizar</button>
            </div>
            <AddSkillsModal canShow={showAdd} hide={() => setShowAdd(false)} add={addSkill} />
        </div>
    )
}

export default SetSkills