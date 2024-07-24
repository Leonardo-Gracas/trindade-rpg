import React from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const Create = () => {
    return (
        <div className='p-3'>
            <Form onSubmit={() => {}}>
                <FormGroup className='pb-2'>
                    <FormLabel>Nome</FormLabel>
                    <FormControl />
                </FormGroup>
                <FormGroup className='pb-2'>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl />
                </FormGroup>
                <FormGroup className='pb-2'>
                    <FormLabel>Quandidade</FormLabel>
                    <FormControl />
                </FormGroup>
            </Form>
        </div>
    )
}

export default Create