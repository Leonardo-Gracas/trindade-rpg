import React, { useState } from 'react'
import { ModalBody, ModalFooter, Nav, NavLink } from 'react-bootstrap'

const SelectMain = ({ setData, handleClose }) => {
    const [choice, setChoice] = useState(0)

    const indexes = [
        "atletismo",
        "presenca",
        "estudo"
    ]

    const indexesNames = [
        "Atletismo",
        "Presença",
        "Estudo"
    ]

    const handleChoice = (index) => {
        let newData = {
            main: indexes[index],
            mainName: indexesNames[index]
        }

        setChoice(index)
    }

    const handleSubmit = () => {
        let newData = {
            main: indexes[choice],
            mainName: indexesNames[choice]
        }

        setData(newData)
    }

    return (
        <>
            <ModalBody>
                <h4 className='text-center mb-4'>O que mudou em seu ser?</h4>

                <Nav className='d-flex flex-column' style={{ color: "black" }}>
                    <Nav.Item>
                        <Nav.Link eventKey={0} id='atletismo' className='btn btn-outline-dark mb-3 border-1' onClick={() => handleChoice(0)}>
                            <i className='bi fs-3 bi-circle'></i>
                            <h5>Atletismo</h5>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={1} id='presença' className='btn btn-outline-dark mb-3' onClick={() => handleChoice(1)}>
                            <i className='bi fs-3 bi-triangle'></i>
                            <h5>Presença</h5>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey={2} id='Estudo' className='btn btn-outline-dark' onClick={() => handleChoice(2)}>
                            <i className='bi fs-3 bi-square'></i>
                            <h5>Estudo</h5>
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-danger' style={{ width: '150px' }} onClick={handleClose}>Cancelar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSubmit}>Próximo</button>
            </ModalFooter>
        </>

    )
}

export default SelectMain