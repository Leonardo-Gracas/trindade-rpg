import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const EditSkill = ({ model, canShow, close, save, del}) => {
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

    return (
        <Modal show={canShow}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Editar habilidade</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className='mb-3' onSubmit={handleSave}>
                    <FormGroup>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl name='nome' required onChange={(e) => handleChange(e)} defaultValue={content.nome} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Descrição:</FormLabel>
                        <FormControl as={"textarea"} name="descricao" required onChange={(e) => handleChange(e)} defaultValue={content.descricao} />
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

export default EditSkill