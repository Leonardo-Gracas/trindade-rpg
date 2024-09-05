import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const AddSkillsModal = ({ canShow, hide, add }) => {
    const [content, setContent] = useState({
        nome: "",
        descricao: ""
    })

    const handleClose = () => {
        setContent({
            nome: "",
            descricao: ""
        })

        hide()
    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setContent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        add(content)
        handleClose()
    }

    return (
        <Modal show={canShow}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Adicionar Habilidade</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className='mb-3'>
                    <FormGroup>
                        <FormLabel>Nome:</FormLabel>
                        <FormControl name='nome' required onChange={(e) => handleChange(e)} defaultValue={""} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Descrição:</FormLabel>
                    <FormControl as={"textarea"} name="descricao" required onChange={(e) => handleChange(e)} defaultValue={""} />
                    </FormGroup>
                </Form>
                <div className='w-100 text-end'>
                    <button className='btn btn-success' onClick={handleSubmit}>Adicionar</button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default AddSkillsModal