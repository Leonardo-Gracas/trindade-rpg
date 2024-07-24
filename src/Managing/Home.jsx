import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardGroup, CardHeader, CardText, CardTitle } from 'react-bootstrap'
import Inventory from './Inventory/Inventory'
import Print from '../Print/Print'

const Home = ({ content, setPage }) => {
    const [player, setPlayer] = useState(cloneDeep(content))

    const handleClose = () => {
        if (confirm("Deseja voltar ao menu inicial?") == false) {
            return
        }
        setPage(0)
    }

    const nivelFormacao = ["", "Iniciante", "Especialista", "Mestre"]


    return (
        <div className='row'>
            <div className='px-1 col-3' style={{ width: '28rem', height: '50rem' }}>
                <Card className='p-0 h-100'>
                    <CardHeader>
                        <div className='d-flex justify-content-between'>
                            <h2>{player.nome}, {player.idade}. {player.descricao}</h2>
                            <button className='btn-close pt-3' onClick={handleClose} />
                        </div>
                    </CardHeader>
                    <CardBody className='text-start row pt-1'>
                        <div className='row' id='attributes'>
                            <div className='col-3 d-flex flex-column pt-0' style={{ minWidth: '27rem' }}>
                                <CardGroup id='Status' className='d-flex justify-content-between mt-3'>
                                    <h5 className='text-success'>HP: {Math.floor(player.hpAtual)}/{Math.floor(player.hpTotal)}</h5>
                                    <h5 className='text-primary'>Esforço: {Math.floor(player.esforcoAtual)}/{Math.floor(player.esforcoTotal)}</h5>
                                    <h5 className='text'>Perícia: {player.pericia}</h5>
                                </CardGroup>
                                <hr />
                                <div className='row w-100'>
                                    <CardGroup id='Corpo' className='d-flex flex-column col-md-6'>
                                        <h3 className='mb-0'>Corpo</h3>
                                        <div className='mb-3'>
                                            <p className='my-2'>força: {Math.floor(player.corpo.forca)}</p>
                                            <p className='my-2'>resistência: {Math.floor(player.corpo.resistencia)}</p>
                                            <p className='my-2'>reflexo: {Math.floor(player.corpo.reflexo)}</p>
                                            <p className='my-2'>pontaria: {Math.floor(player.corpo.pontaria)}</p>
                                            <p className='my-2'>destreza: {Math.floor(player.corpo.destreza)}</p>
                                            <p className='my-2'>furtividade: {Math.floor(player.corpo.furtividade)}</p>
                                            <p className='my-2'>mobilidade: {Math.floor(player.corpo.mobilidade)}</p>
                                        </div>
                                        <h3 className='mb-0'>Interação</h3>
                                        <div >
                                            <p className='my-2'>persuasão: {Math.floor(player.interacao.persuasao)}</p>
                                            <p className='my-2'>inteligência: {Math.floor(player.interacao.inteligencia)}</p>
                                            <p className='my-2'>investigação: {Math.floor(player.interacao.investigacao)}</p>
                                            <p className='my-2'>intuição: {Math.floor(player.interacao.intuicao)}</p>
                                            <p className='my-2'>fé: {Math.floor(player.interacao.fe)}</p>
                                            <p className='my-2'>performance: {Math.floor(player.interacao.performance)}</p>
                                        </div>
                                    </CardGroup>
                                    <CardGroup id='Formacoes' className='col-md-6'>
                                        {player.formacoes.map((item, i) => {
                                            return <div key={i}>
                                                <h3>{item.nome}, {nivelFormacao[item.nivel]}</h3>
                                                <div>
                                                    <p className='my-2'>diagnóstico: {item.diagnostico}</p>
                                                    <p className='my-2'>preparo: {item.preparo}</p>
                                                    <p className='my-2'>execução: {item.execucao}</p>
                                                </div>
                                            </div>
                                        })}
                                    </CardGroup>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className='px-1 col-3' style={{ width: '28rem', height: '50rem' }}>
                <Card className='p-0 h-100'>
                    <CardHeader>
                        <h2>Inventário</h2>
                    </CardHeader>
                    <CardBody className='text-start row pt-1'>
                        <Inventory player={player} setPlayer={setPlayer} />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Home