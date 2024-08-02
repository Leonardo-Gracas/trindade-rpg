import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cookies from "universal-cookie"
import { Tab, Tabs } from 'react-bootstrap'
import Creating from './Creating/Creating'
import Home from './Managing/Home'


function App() {
  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(0)
  const [openUser, setOpenUser] = useState(undefined)

  useEffect(() => {
    let allPlayers = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      allPlayers.push(JSON.parse(localStorage.getItem(keys[i])))
    }

    setPlayers(allPlayers)
  }, [])

  const update = (func) => {
    setPlayers(prev => func(prev))
    setIndex(index + 1)
  }

  const rollback = () => {
    setIndex(index - 1)
  }

  const updatePage = (index) => {
    setPage(index)
    let allPlayers = { ...localStorage }
    setPlayers(allPlayers)
  }

  const deletePlayer = (name) => {
    if(confirm(`Deseja mesmo excluir o personagem "${name}" para sempre?`) == false){
      return
    }
    localStorage.removeItem(name)
    window.location.reload()
  }

  var pages = [
    <div className='w-100 h-100 d-flex flex-column text-light justify-content-center'>
      <h1>RPG Trindade</h1>
      <div className='d-flex flex-column align-items-center mt-5'>
        <button
          className='btn btn-outline-light mb-3'
          style={{ width: '20rem' }}
          onClick={() => setPage(1)}>
          Criar novo personagem
        </button>
        {Object.keys(players).map((item, i) => {
          return <div className='d-flex' style={{ width: '20rem' }}>
            <button key={i}
              className='btn btn-outline-light mb-3 w-100'
              onClick={() => openTab(players[item])}
            >
              {players[item].nome}
            </button>
            <button className='btn btn-danger ms-2 mb-3' onClick={() => deletePlayer(players[item].nome)}>X</button>
          </div>
        })}
      </div>
    </div>,
    <Creating setPage={updatePage} />,
    openUser
  ]

  const openTab = (player) => {
    setOpenUser(<Home content={player} setPage={updatePage} />)
    setPage(2)
  }

  return (
    pages[page]
  )
}

export default App
