import { React, useEffect, useState } from 'react'
import AdicionarFormacaoModal from './AdicionarFormacaoModal'
import { Table } from 'react-bootstrap'

const SetFormacoes = ({ player, update, rollback, finish }) => {
    const [content, setContent] = useState(player.formacoes)
    const [show, setShow] = useState(false)
    const nivel = ['Nenhum', 'Iniciante', 'Especialista', 'Mestre']

    useEffect(() => {
        setContent(player.formacoes)
    }, [player])

    const handleDelete = (index) => {
        if(confirm("Tem certeza que quer deletar essa formação?") == false){
            return
        }

        let newContent = content
        newContent.splice(index, 1)
        setContent(newContent)
        update(prev => {
            return {
                ...prev,
                formacoes: newContent
            }

        })
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div>
            <div className='overflow-y-auto' style={{height: '30rem', maxHeight: '50%'}}>
                <table className='table table-table-striped'>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.nome} - {nivel[item.nivel]}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(i)}><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div>
                <button className='btn btn-primary' onClick={() => setShow(true)}>
                    Adicionar formação
                </button>
            </div>
            <button className='btn btn-outline-success mt-3' onClick={finish}>Finalizar</button>
            <AdicionarFormacaoModal close={handleClose} player={player} show={show} update={update} />
        </div>
    )
}

export default SetFormacoes