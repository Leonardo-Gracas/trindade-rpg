import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const Create = ({ addItem }) => {
    const [item, setItem] = useState({
        nome: "",
        descricao: "",
        quantidade: 1,
        categoria: 1
    })

    const handleUpdate = (e) => {
        let value = e.target.value
        let name = e.target.name

        if (name == 'quantidade') {
            value = parseInt(value)
        }

        setItem(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(item)
    }

    return (
        <div className='p-3'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup className='pb-2'>
                    <FormLabel>Nome</FormLabel>
                    <FormControl name='nome' required onChange={(e) => handleUpdate(e)} />
                </FormGroup>
                <FormGroup className='pb-2'>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl as={'textarea'} required name='descricao' onChange={(e) => handleUpdate(e)} />
                </FormGroup>
                <FormGroup className='pb-2'>
                    <FormLabel>Quandidade</FormLabel>
                    <FormControl type='number' required name='quantidade' onChange={(e) => handleUpdate(e)} />
                </FormGroup>
                <div className='w-100 text-end mt-2'>
                    <button type='submit' className='btn btn-success'>Enviar</button>
                </div>
            </Form>
        </div>
    )
}

export default Create