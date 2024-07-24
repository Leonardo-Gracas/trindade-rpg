import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle, Tab, Tabs } from 'react-bootstrap'
import AddArma from './Weapon/AddArma'
import Create from './Create/Create'

const AddItemModal = ({ show, setShow, describer, addItem }) => {
    const [items, setItems] = useState(undefined)

    useEffect(() => {
        fetch('../../../public/Items.json')
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
                        <Create />
                    </Tab>
                    <Tab eventKey={"armas"} title={"Armas"}>
                        <div className='row row-gap-1'>
                            {items == undefined ? <></>
                                : items.armas.map((item, i) => {
                                    return <div key={i} className='col-3 g-2'>
                                        <AddArma item={item} describer={describer} add={addItem}/>
                                    </div>
                                })}
                        </div>

                    </Tab>
                    <Tab eventKey={"utilitários"} title={"Utilitários"}>

                    </Tab>
                </Tabs>
            </ModalBody>
        </Modal>
    )
}

export default AddItemModal