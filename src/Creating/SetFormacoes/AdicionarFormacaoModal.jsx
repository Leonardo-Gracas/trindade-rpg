import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'
import { toast } from 'sonner'

const AdicionarFormacaoModal = ({ player, update, show, close }) => {
    const [content, setContent] = useState({
        total: undefined,
        nome: "",
        nivel: 0,
        diagnostico: 0,
        execucao: 0,
        preparo: 0,
        tecnicas: [
            {
                nome: "",
                descricao: "",
                procedimento: {}
            }
        ]
    })

    const maxLevel = player.main.estudo
    const totalPoints = content.diagnostico + content.execucao + content.preparo
    const maxPoints = content.total == undefined ? 0 : content.total - totalPoints
    const maxSingle = player.main.estudo + 3

    const handleClose = () => {
        setContent({
            total: 0,
            nome: "",
            nivel: 0,
            diagnostico: 0,
            execucao: 0,
            preparo: 0,
            tecnicas: []
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
        let total = 2 * player.main.estudo + value + 3

        e.target.disabled = true

        setContent({
            ...content,
            nivel: value,
            total: total,
            diagnostico: 0,
            execucao: 0,
            preparo: 0
        })
    }

    const handleChange = (e) => {
        if(e.target.name == 'nome'){
            
            setContent({
                ...content, 
                nome: e.target.value
            })
            return
        }

        let value = parseInt(e.target.value)
        if (isNaN(value)) {
            value = 0
            e.target.value = 0
        }

        if (value > maxSingle) {
            e.target.value = maxSingle
            value = maxSingle
            toast.error('Limite para cada linha é ' + maxSingle)
        }

        if (value < 0) {
            value = 0
            e.target.value = 0
        }

        
        const newContent = {
            ...content,
            [e.target.name]: value
        }
        setContent(newContent)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (maxPoints > 0) {
            toast.warning('Ainda restam pontos')
            return
        }

        if (maxPoints < 0) {
            toast.error('Limite de pontos ultrapassado')
            return
        }

        update(prev => {
            let obj = {
                ...prev,
                formacoes: [...prev.formacoes, content]
            }
            return obj
        })
        handleClose()
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
                            <option value={0}>Selecione o nível da formação</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Especialista</option>
                            <option value={3}>Mestre</option>
                        </FormSelect>
                    </FormGroup>
                    {content.nivel == 0
                        ? true
                        : <>
                            <h2>Pontos disponíveis: {maxPoints}</h2>
                            <FormGroup className='mb-2'>
                                <FormLabel>Preparo:</FormLabel>
                                <FormControl type='number' name='preparo' onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className='mb-2'>
                                <FormLabel>Diagnóstico:</FormLabel>
                                <FormControl type='number' name='diagnostico' onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Execução:</FormLabel>
                                <FormControl type='number' name='execucao' onChange={handleChange} />
                            </FormGroup>
                            <div className='text-end pt-3'>
                                <button className='btn btn-primary' type='submit'>Adicionar</button>
                            </div>
                        </>
                    }
                </Form>
            </ModalBody>

        </Modal>
    )
}

export default AdicionarFormacaoModal