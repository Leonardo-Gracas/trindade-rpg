import { clone, cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'
import { toast } from 'sonner'

const AdicionarFormacaoModal = ({ player, update, show, close }) => {
    const [content, setContent] = useState({
        nome: "",
        nivel: 0,
        competencia: [],
        habilidades: [
        ]
    })

    const maxLevel = player.main.estudo

    const handleClose = () => {
        setContent({
            nome: "",
            nivel: 0,
            competencia: [],
            habilidades: [
            ]
        })
        close()
    }

    const setNivel = (e) => {
        let value = parseInt(e.target.value)
        if (value > maxLevel) {
            toast.warning('Nível de formação não pode ser maior que o nível de Estudo.')
            e.target.value = maxLevel
            return
        }

        setContent(prev => ({
            ...prev,
            nivel: value
        }))
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setContent({
            ...content,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(content.nivel == 0){
            toast.error("Selecione um nível pra formação")
            return
        }

        let newPlayer = player
        newPlayer.formacoes.push(content)

        update((prev) => ({
            ...newPlayer
        }))
        handleClose()
    }

    let options = [
        <option value={0}>Selecione o nível da formação</option>,
        <option value={1}>Iniciante</option>,
        <option value={2}>Especialista</option>,
        <option value={3}>Mestre</option>,
    ]

    const handleHabilityChange = (e, index) => {
        let name = e.target.name
        let value = e.target.value

        let habs = content.habilidades

        habs[index][name] = value

        setContent(prev => ({
            ...prev,
            habilidades: habs
        }))
    }

    return (
        <Modal show={show}>
            <ModalHeader closeButton onHide={handleClose}>
                <ModalTitle>Nova formação</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='mb-2'>
                        <FormLabel>Título:</FormLabel>
                        <FormControl required name='nome' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Nível:</FormLabel>
                        <FormSelect required name='nivel' onChange={setNivel} def>
                            {options.map((item, i) => {
                                if (i > player.main.estudo) {
                                    return
                                }
                                return item
                            })
                            }
                        </FormSelect>
                    </FormGroup>
                    <div className='text-end pt-3'>
                        <button className='btn btn-primary' type='submit'>Adicionar</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default AdicionarFormacaoModal