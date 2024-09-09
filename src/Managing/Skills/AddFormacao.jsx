import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const AddFormacao = ({ close, save }) => {
    const [content, setContent] = useState({
        nome: '',
        descricao: ''
    })

    const handleClose = () => {
        close()
    }

    const handleSave = () => {
        if(confirm("Deseja salvar as alterações?") == false){
            return
        }

        save(content)
        close()
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if(name == "nivel"){
            value = parseInt(value)
        }

        setContent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const options = [
        <option value={0}>Selecione o nível da formação</option>,
        <option value={1}>Iniciante</option>,
        <option value={2}>Especialista</option>,
        <option value={3}>Mestre</option>,
    ]

    return (
        <Modal show={true}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Adicionar habilidade</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className='mb-3' onSubmit={handleSave}>
                    <FormGroup>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl name='nome' required onChange={(e) => handleChange(e)} />
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Nível:</FormLabel>
                        <FormSelect required name='nivel' onChange={(e) => handleChange(e)} def>
                            {options}
                        </FormSelect>
                    </FormGroup>
                </Form>
                <div className='w-100 text-end'>
                    <button className='btn btn-danger me-2' onClick={() => close()}>Cancelar</button>
                    <button className='btn btn-success' onClick={handleSave}>Salvar</button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default AddFormacao