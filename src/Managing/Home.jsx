import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardGroup, CardHeader, CardText, CardTitle, CarouselItem, Modal, ModalHeader } from 'react-bootstrap'
import Inventory from './Inventory/Inventory'
import Carousel from 'react-bootstrap/Carousel';
import Skills from './Skills/Skills';
import UpgradeModal from './Upgrading/UpgradeModal';

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
    const [showUpgrade, setShowUpgrade] = useState(false)

    useEffect(() => {
        localStorage.setItem(player.nome, JSON.stringify(player))
    }, [player])

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

    const Evoluir = () => {
        setShowUpgrade(true)
    }

    return (
        <Carousel interval={null} controls={!isMobile} indicators={false} className='px-0'>
            <CarouselItem>
                <div className='w-100 d-flex justify-content-center'>
                    <Card className='p-0 pb-2' >
                        <CardHeader>
                            <CardTitle>{player.nome}</CardTitle>
                        </CardHeader>
                        <div className='text-start justify-content-center row p-3 overflow-y-auto' style={{ height: '80vh' }}>
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
                                <div id='Corpo/Interação' className='row'>
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
                                <button onClick={Evoluir} className='btn btn-outline-dark border-0'>Evoluir</button>
                                <UpgradeModal player={player} setPlayer={setPlayer} show={showUpgrade} setShow={setShowUpgrade} />
                            </div>
                            <div className='text-end mt-auto'>
                                <button onClick={handleDownload} className='btn btn-secondary'><i className="bi bi-download"></i></button>
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
                        <div className='text-start justify-content-center row p-3 overflow-hidden' style={{ height: '80vh' }}>
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
                        <CardBody className='p-0 pe-3'>
                            <div className='text-start justify-content-center row p-3 overflow-y-auto overflow-x-hidden' style={{ height: '80vh' }}>
                                <div className='col-md-3 d-flex flex-column' style={{ width: '24rem' }}>
                                    <Skills player={player} setPlayer={setPlayer} />
                                </div>
                            </div>
                        </CardBody>

                    </Card>
                </div>
            </CarouselItem>
        </Carousel>
    )
}

export default Home