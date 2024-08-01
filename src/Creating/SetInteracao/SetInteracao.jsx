import {React, useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap'
import { toast } from 'sonner'

const SetInteracao = ({ player, update, rollback }) => {
    const [content, setContent] = useState({
        "total": player.main.presenca * 8,
        "persuasao": player.interacao.persuasao,
        "investigacao": player.interacao.investigacao,
        "intuicao": player.interacao.intuicao,
        "fe": player.interacao.fe,
        "inteligencia": player.interacao.inteligencia,
        "performance": player.interacao.performance
    })
    const titles = ['Persuasão', 'Investigação', 'Intuição', 'Fé', 'Inteligência', 'Performance']

    const concentracao = content.inteligencia + content.performance
    const elevacao = content.fe + content.intuicao

    const totalPoints = Object.values(content).reduce((acc, curr) => acc + curr, 0) - content.total
    const maxPoints = content.total - totalPoints
    const maxSingle = 3 + player.main.presenca

    const handleChange = (e) => {
        let value = parseInt(e.target.value)
        if (isNaN(value)) {
            value = 0
            e.target.value = 0
        }

        if (value > maxSingle) {
            e.target.value = maxSingle
            toast.error('Limite para cada linha é ', maxSingle)
            value = maxSingle
        }

        if(value < 0){
            value = 0
            e.target.value = 0
        }

        const newContent = {
            ...content,
            [e.target.name]: value
        }

        setContent(newContent)
    }

    const handleSubmit = () => {
        // const totalPoints = Object.values(content).reduce((acc, curr) => acc + curr, 0) - content.total
        // const maxPoints = content.total - totalPoints

        if (maxPoints < 0) {
            toast.error("O limite total de pontos foi excedido")
            return
        }
        if (maxPoints > 0) {
            toast.warning("Ainda restam pontos")
            return
        }

        update((data) => {
            return {
                ...data,
                interacao: {
                    ...content
                }
            }
        })
    }

    return (
        <div className='d-flex flex-column' style={{maxWidth: '100%'}}>
            <Card className='p-0 w-100'>
                <CardHeader>
                    <CardTitle>Interação</CardTitle>
                </CardHeader>
                <CardBody className='mx-2 mb-1'>
                    <h4>Pontos disponíveis: {maxPoints}</h4>
                    {maxPoints < 0 ? <p className='text-danger'>Limite excedido</p> : false}
                    <div className='d-flex flex-column'>
                        <p>Concentração: {concentracao}</p>
                        <p>Elevação: {elevacao}</p>
                    </div>
                    <Form className='text-start'>
                        {
                            Object.keys(content).map((prop, i) => {
                                if (i == 0) {
                                    return
                                }
                                return <FormGroup className='mb-3' key={i}>
                                    <FormLabel>{titles[i - 1]}</FormLabel>
                                    <FormControl
                                        required
                                        type='number'
                                        min={0}
                                        max={maxSingle}
                                        name={prop}
                                        placeholder={titles[i - 1]}
                                        onChange={handleChange}
                                        defaultValue={content[prop]}
                                    />
                                </FormGroup>
                            })
                        }
                    </Form>
                </CardBody>
            </Card>
            <div className='d-flex justify-content-between mt-3 w-100'>
                <button className='btn btn-outline-danger me-1' style={{ width: '150px' }} onClick={rollback}>Retornar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSubmit}>Próximo</button>
            </div>
        </div>
    )
}

export default SetInteracao