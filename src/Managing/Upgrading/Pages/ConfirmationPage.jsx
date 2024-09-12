import React from 'react'
import { ModalBody, ModalFooter } from 'react-bootstrap'

const ConfirmationPage = ({ player, content, handleClose, finish }) => {

    const handleSubmit = () => {
        finish()
        handleClose()
    }

    return (
        <>
            <ModalBody>
                <h4 className='text-center mb-4'>Aceita a evolução?</h4>
                <p>As seguintes alterações foram feitas:</p>

                <ul>
                    <li><strong>Nivel:</strong> {player.nivel} {"->"} {parseInt(player.nivel) + 1}</li>
                    <li><strong>{content.mainName}:</strong> {player.main[content.main]} {"->"} {player.main[content.main] + 1}</li>
                </ul>

                <ul>
                    {content.props.map((item, i) => {
                        return <li key={i}><strong>{item.propName}:</strong> {item.oldValue} {"->"} {item.newValue}</li>
                    })}
                </ul>

                <ul>
                    {content.interacao.map((item, i) => {
                        return <li key={i}><strong>{item.propName}:</strong> {item.oldValue} {"->"} {item.newValue}</li>
                    })}
                </ul>

                <ul>
                    {content.corpo.map((item, i) => {
                        return <li key={i}><strong>{item.propName}:</strong> {item.oldValue} {"->"} {item.newValue}</li>
                    })}
                </ul>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-danger' style={{ width: '150px' }} onClick={handleClose}>Cancelar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSubmit}>Próximo</button>
            </ModalFooter>
        </>
    )
}

export default ConfirmationPage