import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { toast } from 'sonner'

const SetLevel = ({update}) => {
    const [level, setLevel] = useState(0)

    const handleChange = (e) => {
        let value = e.target.value

        if(value > 9){
            toast.error("O limite da ficha é 9.")
            e.target.value = 9
            value = 9
        }

        if(value < 1){
            toast.error("O limite mínimo é 1")
            e.target.value = 1
            value = 1
        }

        setLevel(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        update(prev => {
            return {
                ...prev,
                nivel: level
            }
        })
    }

    return (
        <Card className='p-0'>
            <CardHeader>
                <CardTitle>Nivel</CardTitle>
            </CardHeader>
            <CardBody>
            <Form className='text-start' onSubmit={handleSubmit}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Qual o nível do seu personagem?</FormLabel>
                        <FormControl required type='number' placeholder='nivel' onChange={handleChange} />
                    </FormGroup>
                    <button type='submit' className='btn btn-primary w-100'>Próximo</button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default SetLevel