import React, { useEffect, useState } from 'react'
import { CardGroup, ListGroup, ListGroupItem, Modal, ModalHeader } from 'react-bootstrap'
import AddItemModal from './AddItemModal'
import Arma from './Weapon/Arma'
import { clone, cloneDeep } from 'lodash'
import Util from './Utils/Util'
const Inventory = ({ player, setPlayer }) => {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])
  const [describer, setDescriber] = useState(undefined)

  const removeItem = (key) => {
    if (confirm("Deseja mesmo excluir este item?") == false) {
      return 0
    }
    var newInventory = player.inventario
    newInventory.splice(key, 1)

    let result = {
      ...player,
      inventario: clone(newInventory)
    }

    setPlayer(result)
    localStorage.setItem(player.nome, JSON.stringify(result))
  }

  useEffect(() => {
    fetch('/trindade-rpg/ItemDescriber.json')
      .then(res => res.json())
      .then(data => {
        setDescriber(data)
      })
  }, [])
  useEffect(() => {
    if (describer == undefined) {
      return
    }
    let formatedItems = player.inventario.map((item, key) => {
      if (item.categoria == 0) {
        return <Arma item={item} describer={describer} player={player} key={key} id={key} removeItem={removeItem} />
      } else if (item.categoria == 1) {
        return <Util item={item} key={key} id={key} removeItem={removeItem} />
      }
    })
    setItems(formatedItems)
  }, [describer, player])

  const addItem = (item) => {
    if (confirm(`Deseja adicionar o item "${item.nome}"?`) == false) {
      return
    }

    let result = {
      ...player,
      inventario: [
        ...player.inventario,
        item
      ]
    }

    setPlayer(result)
    localStorage.setItem(player.nome, JSON.stringify(result))

    setShow(false)
  }

  return (
    <>
      <div id='Inventory' className='d-flex flex-column justify-content-between overflow-hidden'>
        <div style={{ height: '70vh', overflowY: 'auto' }}>
          {items}
        </div>
        <div>
          <hr className='mt-0 mb-2' />
          <button className='btn btn-success w-100' onClick={() => setShow(true)}>Adicionar</button>
        </div>
      </div>
      <AddItemModal show={show} setShow={setShow} describer={describer} addItem={addItem} />
    </>

  )
}

export default Inventory