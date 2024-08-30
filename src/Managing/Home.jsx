import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardGroup, CardHeader, CardText, CardTitle, CarouselItem, Modal, ModalHeader } from 'react-bootstrap'
import Inventory from './Inventory/Inventory'
import Carousel from 'react-bootstrap/Carousel';

const Home = ({ content, setPage }) => {
    // Checagem se é mobile
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    // Base
    const [player, setPlayer] = useState(cloneDeep(content))

    const handleClose = () => {
        if (confirm("Deseja voltar ao menu inicial?") == false) {
            return
        }
        setPage(0)
    }

    const handleDownload = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(player)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        let fileName = player.nome + ".json"
        link.download = fileName;

        link.click();
    }

    const nivelFormacao = ["", "Iniciante", "Especialista", "Mestre"]
    const nivelCompetenia = ["", "1d4", "1d6", "1d8"]

    return (
        <Carousel interval={null} controls={!isMobile} indicators={false} className='px-0'>
            <CarouselItem>
                <div className='w-100 d-flex justify-content-center'>
                    <Card className='p-0' >
                        <CardHeader className='row'>
                            <div className='col-4'></div>
                            <CardTitle className='col-4 d-flex align-items-center justify-content-center'>{player.nome}</CardTitle>
                            <div className='col-4 text-end'><button onClick={handleDownload} className='btn btn-secondary'><i className="bi bi-download"></i></button></div>
                        </CardHeader>
                        <div className='text-start justify-content-center row p-3 overflow-y-auto overflow-x-hidden' style={{ maxHeight: '80vh' }}>
                            <div className='col-md-3 d-flex flex-column' style={{ width: '24rem' }}>
                                <div className='d-flex flex-column'>
                                    <div className='mb-2'>
                                        <h5>{player.nome}, {player.descricao}</h5>
                                        <h6>Nível: {player.nivel}</h6>
                                    </div>
                                    <h6>Atletismo: {player.main.atletismo} - Estudo: {player.main.estudo} - Presença: {player.main.presenca}</h6>
                                    <h6>Manuseio: {player.pericia}</h6>
                                </div>
                                <hr></hr>
                                <div id='Status' className='row'>
                                    <h6 className='text col-6'>HP: {player.hp}</h6>
                                    <h6 className='text col-6'>Esforço: {player.esforco}</h6>
                                    <h6 className='text col-6'>Concentração: {player.concentracao}</h6>
                                    <h6 className='text col-6'>Elevação: {player.elevacao}</h6>
                                </div>
                                <hr />
                                <div id='Corpo' className='row'>
                                    <div className='col-6'>
                                        <h4 className='mb-0'>Corpo</h4>
                                        <div className='mb-3'>
                                            <p className='my-2'>força: {Math.floor(player.corpo.forca)}</p>
                                            <p className='my-2'>resistência: {Math.floor(player.corpo.resistencia)}</p>
                                            <p className='my-2'>reflexo: {Math.floor(player.corpo.reflexo)}</p>
                                            <p className='my-2'>pontaria: {Math.floor(player.corpo.pontaria)}</p>
                                            <p className='my-2'>destreza: {Math.floor(player.corpo.destreza)}</p>
                                            <p className='my-2'>furtividade: {Math.floor(player.corpo.furtividade)}</p>
                                            <p className='my-2'>mobilidade: {Math.floor(player.corpo.mobilidade)}</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <h4 className='mb-0'>Interação</h4>
                                        <div >
                                            <p className='my-2'>persuasão: {Math.floor(player.interacao.persuasao)}</p>
                                            <p className='my-2'>inteligência: {Math.floor(player.interacao.inteligencia)}</p>
                                            <p className='my-2'>investigação: {Math.floor(player.interacao.investigacao)}</p>
                                            <p className='my-2'>intuição: {Math.floor(player.interacao.intuicao)}</p>
                                            <p className='my-2'>fé: {Math.floor(player.interacao.fe)}</p>
                                            <p className='my-2'>performance: {Math.floor(player.interacao.performance)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='w-100 d-flex justify-content-center'>
                    <Card className='p-0 pb-2 w-auto'>
                        <CardHeader className='text-center'>
                            <CardTitle>Inventário</CardTitle>
                        </CardHeader>
                        <div className='text-start justify-content-center row p-3 overflow-hidden' style={{ maxHeight: '80vh' }}>
                            <div className='col-md-3 d-flex flex-column' style={{ width: '24rem' }}>
                                <Inventory player={player} setPlayer={setPlayer} />
                            </div>
                        </div>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='w-100 d-flex justify-content-center'>
                    <Card className='p-0 pb-2' >
                        <CardHeader className='d-flex justify-content-center'>
                            <CardTitle>Formações</CardTitle>
                        </CardHeader>
                        <div className='text-start justify-content-center row p-3 overflow-y-auto overflow-x-hidden' style={{ maxHeight: '80vh' }}>
                            <div className='col-md-3 d-flex flex-column' style={{ width: '24rem' }}>
                                {player.formacoes.map((item, i) => {
                                    return <div key={i}>
                                        <div className='w-100 d-flex justify-content-between'>
                                            <h4>{item.nome}</h4>
                                            <button className='btn btn-outline-secondary'><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <p>{nivelFormacao[item.nivel]}, {nivelCompetenia[item.nivel]}</p>

                                        {item.competencia.map((comp, j) => {
                                            return <p><strong>{item.competencia}</strong></p>
                                        })}

                                        {item.habilidades.map((hab, j) => {
                                            return <div key={j}>
                                                <strong>{hab.nome}</strong>
                                                <p>{hab.descricao}</p>
                                            </div>
                                        })}
                                        {i == player.formacoes.length - 1 ? true : <hr />}
                                        
                                    </div>
                                })}
                            </div>
                        </div>
                    </Card>
                </div>
            </CarouselItem>
        </Carousel>
    )
}

export default Home