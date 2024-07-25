import React, { useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap'
import { toast } from 'sonner'

function media(num1, num2) {
    let res = (num1 + num2) / 2
    if(isNaN(res)){
        res = 0
    }
    return res
}

const SetCorpoBase = ({ player, update, rollback }) => {
    const [content, setContent] = useState({
        "total": player.main.atletismo * 5,
        "forca": player.corpoBase.forca,
        "resistencia": player.corpoBase.resistencia,
        "reflexo": player.corpoBase.reflexo,
        "pontaria": player.corpoBase.pontaria,
        "destreza": player.corpoBase.destreza,
        "furtividade": player.corpoBase.furtividade,
        "mobilidade": player.corpoBase.mobilidade
    })
    const titles = ['Força', 'Resistência', 'Reflexo', 'Pontaria', 'Destreza', 'Furtividade', 'Mobilidade']

    const final = {
        "forca": media(content.mobilidade, content.resistencia) + content.forca,
        "resistencia": media(content.forca, content.reflexo) + content.resistencia,
        "reflexo": media(content.resistencia, content.pontaria) + content.reflexo,
        "pontaria": media(content.reflexo, content.destreza) + content.pontaria,
        "destreza": media(content.pontaria, content.furtividade) + content.destreza,
        "furtividade": media(content.destreza, content.mobilidade) + content.furtividade,
        "mobilidade": media(content.furtividade, content.forca) + content.mobilidade
    }

    const hp = final.forca + final.resistencia + 4
    const esforco = final.mobilidade + final.furtividade + 1
    const pericia = final.destreza + final.pontaria + final.reflexo

    const totalPoints = Object.values(content).reduce((acc, curr) => acc + curr, 0) - content.total
    const maxPoints = content.total - totalPoints

    const handleChange = (e) => {
        let value = parseInt(e.target.value)
        if (isNaN(value)) {
            value = 0
            e.target.value = 0
        }

        if (value > 6) {
            e.target.value = 6
            toast.error('Limite para cada linha é 6')
            value = 6
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
                corpoBase: {
                    ...content
                },
                corpo: {
                    ...final
                },
                hpTotal: hp,
                hpAtual: hp,
                esforcoTotal: esforco,
                esforcoAtual: esforco,
                pericia: pericia
            }
        })
    }

    return (
        <div className='d-flex flex-column'>
            <Card className='p-0' style={{ width: '400px' }}>
                <CardHeader>
                    <CardTitle>Corpo Base</CardTitle>
                </CardHeader>
                <CardBody className='mx-2 mb-1'>
                    <h4>Pontos disponíveis: {maxPoints}</h4>
                    <p className='text-secondary'>Cada ponto distribuido em um atributo passa 0.5 para cada atributo adjacente</p>
                    {maxPoints < 0 ? <p className='text-danger'>Limite excedido</p> : false}
                    <div>
                        <p>Hp: {hp}</p>
                        <p>Esforço: {esforco}</p>
                        <p>Perícia: {pericia}</p>
                    </div>
                    <Form className='text-start'>
                        {
                            Object.keys(content).map((prop, i) => {
                                if(i == 0){
                                    return
                                }
                                return <FormGroup className='mb-3' key={i}>
                                    <FormLabel>{titles[i - 1]}</FormLabel>
                                    <FormControl
                                        required
                                        type='number'
                                        min={0}
                                        max={6}
                                        name={prop}
                                        placeholder={titles[i - 1]}
                                        onChange={handleChange}
                                        defaultValue={content[prop]}
                                    />
                                    <p className='text-secondary'>Final: {final[prop]}</p>
                                </FormGroup>
                            })
                        }
                    </Form>
                </CardBody>
            </Card>
            <div className='d-flex justify-content-between mt-3 px-3 w-100'>
                <button className='btn btn-outline-danger' style={{ width: '150px' }} onClick={rollback}>Retornar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSubmit}>Próximo</button>
            </div>
        </div>
    )
}

export default SetCorpoBase
