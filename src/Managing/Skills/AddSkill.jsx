import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const AddSkill = ({ close, save }) => {
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

        setContent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Modal show={true}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Adicionar habilidade</ModalTitle>
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
                    <button className='btn btn-danger me-2' onClick={() => close()}>Cancelar</button>
                    <button className='btn btn-success' onClick={handleSave}>Salvar</button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default AddSkill