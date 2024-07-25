import React, { useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Card, CardHeader, CardTitle, CardBody, FormCheck } from 'react-bootstrap'
import { toast } from 'sonner'

const SetMain = ({ player, update, rollback }) => {
  const [content, setContent] = useState({
    "estudo": player.main.estudo,
    "atletismo": player.main.atletismo,
    "presenca": player.main.presenca
  })
  const maxPoints = 6 - content.estudo - content.atletismo - content.presenca

  const handleChange = (e) => {
    let value = parseInt(e.target.value)
    if (isNaN(value)) {
      value = 0
      e.target.value = 0
    }

    if (value > 3) {
      e.target.value = 3
      value = 3
      toast.error('Limite para cada linha é 3')
    }

    let res = {
      ...content,
      [e.target.name]: value
    }

    setContent(res)
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
        main: {
          ...content
        }
      }
    })
  }

  return (
    <div className='d-flex flex-column align-items-start'>
      <Card className='p-0' style={{ width: '400px' }}>
        <CardHeader>
          <CardTitle>Trindade</CardTitle>
        </CardHeader>
        <CardBody className='mx-2 mb-1'>
          <h4>Pontos disponíveis: {maxPoints}</h4>
          {maxPoints < 0 ? <p className='text-danger'>Limite excedido</p> : false}
          <Form className='text-start'>
            <FormGroup className='mb-3'>
              <FormLabel>Estudo (Governa as formações do personagem)</FormLabel>
              <FormControl required type='number' name='estudo' placeholder='Estudo' onChange={handleChange} defaultValue={content.estudo} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormLabel>Atletismo (Governa os atributos físicos e motores do personagem)</FormLabel>
              <FormControl required type='number' name='atletismo' placeholder='Atletismo' onChange={handleChange} defaultValue={content.atletismo} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Presença (Governa as competências sociais, intelectuais e mágicas do personagem)</FormLabel>
              <FormControl required type='number' name='presenca' placeholder='Presença' onChange={handleChange} defaultValue={content.presenca} />
            </FormGroup>
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

export default SetMain