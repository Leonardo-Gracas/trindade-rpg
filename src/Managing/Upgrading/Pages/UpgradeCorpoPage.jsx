import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter } from 'react-bootstrap'
import { toast } from 'sonner'

function media(num1, num2) {
    let res = (num1 + num2) / 2
    if (isNaN(res)) {
        res = 0
    }
    return res
}

const UpgradeCorpoPage = ({ setData, player, handleClose }) => {

    const [content, setContent] = useState({
        "total": player.main.atletismo * 5 + 5,
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

        if (value < player.corpoBase[e.target.name] || isNaN(value)) {
            value = player.corpoBase[e.target.name]
            e.target.value = player.corpoBase[e.target.name]
            toast.warning("Nenhum ponto pode ser removido.")
        }

        if (value > 6) {
            e.target.value = 6
            toast.error('Limite para cada linha é 6')
            value = 6
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

        let alters = Object.keys(final).map((prop, i) => {
            if (Math.floor(final[prop]) == player.corpo[prop]) {
                return
            }

            return {
                prop: prop,
                propName: titles[i],
                oldValue: Math.floor(player.corpo[prop]),
                newValue: Math.floor(final[prop]),
                newBaseValue: content[prop]
            }
        }).filter((item) => {
            if (item == undefined) {
                return false
            }
            return true
        })

        let propsAlters = []

        if (hp != player.hp) {
            propsAlters.push({
                prop: "hp",
                propName: "HP",
                oldValue: Math.floor(player.hp),
                newValue: Math.floor(hp),
            });
        }

        if (esforco != player.esforco) {
            propsAlters.push({
                prop: "esforco",
                propName: "Esforço",
                oldValue: Math.floor(player.esforco),
                newValue: Math.floor(esforco),
            });
        }

        if (pericia != player.pericia) {
            propsAlters.push({
                prop: "pericia",
                propName: "Perícia",
                oldValue: player.pericia,
                newValue: pericia,
            });
        }

        let newData = {
            props: [
                ...propsAlters,
            ],
            corpo: [
                ...alters
            ]
        }

        console.log(newData)
        setData(newData)
    }

    return (
        <>
            <ModalBody>
                <h4 className='text-center mb-4'>O que mudou em sua carne?</h4>

                <h4>Pontos disponíveis: {maxPoints}</h4>
                <p className='text-secondary'>Cada ponto distribuido em um atributo passa 0.5 para cada atributo adjacente. Decimais serão desconsiderados.</p>
                {maxPoints < 0 ? <p className='text-danger'>Limite excedido</p> : false}
                <p className='mb-0'>Hp: {hp}</p>
                <p className='mb-0'>Esforço: {esforco}</p>
                <p>Manuseio: {pericia}</p>
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
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-danger' style={{ width: '150px' }} onClick={handleClose}>Cancelar</button>
                <button className='btn btn-primary' style={{ width: '150px' }} onClick={handleSubmit}>Próximo</button>
            </ModalFooter>
        </>
    )
}

export default UpgradeCorpoPage