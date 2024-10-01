import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle, Tab, Tabs } from 'react-bootstrap'
import AddArma from './Weapon/AddArma'
import Create from './Create/Create'
import AddUtil from './Utils/AddUtil'

const AddItemModal = ({ show, setShow, describer, addItem }) => {
    const [items, setItems] = useState(undefined)

    useEffect(() => {
        fetch('/trindade-rpg/Items.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <Modal show={show} size='lg'>
            <ModalHeader closeButton onHide={() => setShow(false)}>
                <ModalTitle>Adicionar item</ModalTitle>
            </ModalHeader>
            <ModalBody className='w-100'>
                <Tabs>
                    <Tab eventKey={"Create"} title={"Criar"}>
                        <Create addItem={addItem} />
                    </Tab>
                    <Tab eventKey={"armas"} title={"Armas"}>
                        <div className='row row-gap-1'>
                            {items == undefined ? <></>
                                : items.armas.map((item, i) => {
                                    return <div key={i} className='col-md-3 g-2'>
                                        <AddArma item={item} add={addItem} />
                                    </div>
                                })}
                        </div>
                    </Tab>
                    <Tab eventKey={"utilitários"} title={"Utilitários"}>
                        <div className='row row-gap-1'>
                            {items == undefined ? <></>
                                : items.utils.map((item, i) => {
                                    return <div key={i} className='col-md-3 g-2'>
                                        <AddUtil item={item} describer={describer} add={addItem} />
                                    </div>
                                })}
                        </div>
                    </Tab>
                </Tabs>
            </ModalBody>
        </Modal>
    )
}

export default AddItemModal