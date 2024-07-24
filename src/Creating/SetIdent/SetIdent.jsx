import { React, useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap'

const SetIdent = ({ player, update }) => {
    const [content, setContent] = useState({
        "nome": player.nome,
        "idade": player.idade,
        "descricao": player.descricao
    })

    const handleChange = (e) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        update((player) => {
            return {
                ...player,
                ...content
            }
        })
    }

    return (
        <Card className='p-0'>
            <CardHeader>
                <CardTitle>Identidade</CardTitle>
            </CardHeader>
            <CardBody className='mx-2 mb-2'>
                <Form className='text-start' onSubmit={handleSubmit}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Qual o nome do seu personagem?</FormLabel>
                        <FormControl required name='nome' placeholder='Nome' onChange={handleChange} defaultValue={player.nome} />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormLabel>Qual a idade do seu personagem?</FormLabel>
                        <FormControl required type='number' name='idade' placeholder='Idade' onChange={handleChange} defaultValue={player.idade} />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormLabel>Quem é o seu personagem?</FormLabel>
                        <FormControl required rows={4} as='textarea' name='descricao' placeholder='Breve descrição' onChange={handleChange} defaultValue={player.descricao} />
                    </FormGroup>
                    <button type='submit' className='btn btn-primary w-100'>Próximo</button>
                </Form>
            </CardBody>
        </Card>

    )
}

export default SetIdent