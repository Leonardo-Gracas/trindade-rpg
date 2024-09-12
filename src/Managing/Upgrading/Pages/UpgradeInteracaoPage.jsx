import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter } from 'react-bootstrap'
import { toast } from 'sonner'

const UpgradeInteracaoPage = ({ setData, player, handleClose }) => {
    const [content, setContent] = useState({
        "total": (player.main.presenca * 8) + 8 /* Oito pontos da evolução */,
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

        if (value < player.interacao[e.target.name] || isNaN(value)) {
            value = player.interacao[e.target.name]
            e.target.value = player.interacao[e.target.name]
            toast.warning("Nenhum ponto pode ser removido.")
        }

        if (value > maxSingle) {
            e.target.value = maxSingle
            toast.error('Limite para cada linha é ' + maxSingle)
            value = maxSingle
        }

        const newContent = {
            ...content,
            [e.target.name]: value
        }

        setContent(newContent)
    }

    const handleSumbit = () => {
        if (maxPoints < 0) {
            toast.error("O limite total de pontos foi excedido")
            return
        }
        if (maxPoints > 0) {
            toast.warning("Ainda restam pontos")
            return
        }

        let alters = Object.keys(content).map((prop, i) => {
            if (i == 0) {
                return
            }

            if (content[prop] == player.interacao[prop]) {
                return
            }

            return {
                prop: prop,
                propName: titles[i - 1],
                oldValue: player.interacao[prop],
                newValue: content[prop]
            }
        }).filter((item) => {
            if (item == undefined) {
                return false
            }
            return true
        })

        let propsAlters = []

        if (elevacao != player.elevacao) {
            propsAlters.push({
                prop: "elevacao",
                propName: "Elevação",
                oldValue: player.elevacao,
                newValue: elevacao
            })
        }

        if (concentracao != player.concentracao) {
            propsAlters.push({
                prop: "concentracao",
                propName: "Concentração",
                oldValue: player.concentracao,
                newValue: concentracao
            })
        }

        let newData = {
            props: [
                ...propsAlters
            ],
            interacao: [
                ...alters
            ]
        }

        setData(newData)
    }

    return (
        <>
            <ModalBody>
                <h4 className='text-center mb-4'>O que mudou em sua identidade?</h4>

                <h4>Pontos disponíveis: {maxPoints}</h4>
                {maxPoints < 0 ? <p className='text-danger'>Limite excedido</p> : false}

                <p className='mb-0'>Concentração: {concentracao}</p>
                <p>Elevação: {elevacao}</p>
                <Form>
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
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-danger' style={{ width: '150px' }} onClick={handleClose}>Cancelar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSumbit}>Próximo</button>
            </ModalFooter>
        </>
    )
}

export default UpgradeInteracaoPage