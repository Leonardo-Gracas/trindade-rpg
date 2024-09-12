import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import SelectMain from './Pages/SelectMain'
import ConfirmationPage from './Pages/ConfirmationPage'
import UpgradeInteracaoPage from './Pages/UpgradeInteracaoPage'
import UpgradeCorpoPage from './Pages/UpgradeCorpoPage'
import { cloneDeep } from 'lodash'

const UpgradeModal = ({ player, setPlayer, show, setShow }) => {
    const [pageController, setPageController] = useState({
        pageIndex: 0,
        content: {
            main: "",
            mainName: "",
            interacao: [],
            corpo: [],
            props: []
        }
    })

    const handleClose = () => {
        setShow(false)
        setPageController({
            pageIndex: 0,
            content: {
                main: "",
                mainName: "",
                interacao: [],
                corpo: [],
                props: []
            }
        })
    }

    const saveData = (contentToSave) => {
        let newData = {
            ...pageController,
            content: {
                ...pageController.content,
                ...contentToSave
            }
        }

        if (newData.content.main == "estudo"
            || newData.content.interacao.length != 0
            || newData.content.corpo.length != 0) {
            newData.pageIndex = 3
        } else if (newData.content.main == "presenca") {
            newData.pageIndex = 1
        } else if (newData.content.main == "atletismo") {
            newData.pageIndex = 2
        }

        setPageController(newData)
    }

    const finish = () => {
        let newPlayer = cloneDeep(player)

        newPlayer.nivel ++;
        newPlayer.main[pageController.content.main] ++;

        pageController.content.props.forEach((item, i) => {
            newPlayer[item.prop] = item.newValue

            if(item.prop != "pericia"){
                newPlayer[item.prop + "Atual"] = item.newValue
            }
        })
        pageController.content.corpo.forEach((item, i) => {
            newPlayer.corpo[item.prop] = item.newValue
            newPlayer.corpoBase[item.prop] = item.newBaseValue
        })
        pageController.content.interacao.forEach((item, i) => {
            newPlayer.interacao[item.prop] = item.newValue
        })

        setPlayer(newPlayer)
    }

    const pages = [
        <SelectMain setData={saveData} handleClose={handleClose} />,
        <UpgradeInteracaoPage player={player} setData={saveData} handleClose={handleClose} />,
        <UpgradeCorpoPage player={player} setData={saveData} handleClose={handleClose} />,
        <ConfirmationPage content={pageController.content} player={player} handleClose={handleClose} finish={finish}/>
    ]

    const [pageIndex, setPageIndex] = useState(0)

    return (
        <Modal show={show}>
            <ModalHeader closeButton onHide={handleClose}>
                Evolução
            </ModalHeader>
            {pages[pageController.pageIndex]}
        </Modal>
    )
}

export default UpgradeModal