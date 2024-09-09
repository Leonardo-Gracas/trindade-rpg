import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const EditFormacao = ({ model, canShow, close, save, del}) => {
    const [content, setContent] = useState(model)

    const handleClose = () => {
        close()
    }

    const handleDelete = () => {
        del()
        handleClose()
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

    const handleSave = (e) => {
        e.preventDefault()

        if(confirm("Deseja salvar as alterações?") == false){
            return
        }

        save(content)
        handleClose()
    }

    const options = [
        <option value={0}>Selecione o nível da formação</option>,
        <option value={1}>Iniciante</option>,
        <option value={2}>Especialista</option>,
        <option value={3}>Mestre</option>,
    ]

    return (
        <Modal show={canShow}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Editar formação</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className='mb-3' onSubmit={handleSave}>
                    <FormGroup>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl name='nome' required onChange={(e) => handleChange(e)} defaultValue={content.nome} />
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Nível:</FormLabel>
                        <FormSelect required name='nivel' onChange={(e) => handleChange(e)} defaultValue={content.nivel} def>
                            {options}
                        </FormSelect>
                    </FormGroup>
                </Form>
                <div className='w-100 text-end'>
                    <button className='btn btn-danger me-2' onClick={handleDelete}>Excluir</button>
                    <button className='btn btn-success' onClick={handleSave}>Salvar</button>
                </div>
            </ModalBody>
        </Modal>
    )
}


export default EditFormacao