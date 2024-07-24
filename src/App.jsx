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
  const cookies = new Cookies()

  useEffect(() => {
    let allPlayers = cookies.getAll()
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
    let allPlayers = cookies.getAll()
    setPlayers(allPlayers)
  }

  var pages = [
    <div className='w-100 h-100 d-flex flex-column justify-content-center'>
      <h1>RPG Trindade</h1>
      <div className='d-flex flex-column align-items-center mt-5'>
        <button
          className='btn btn-outline-dark mb-3'
          style={{ width: '300px' }}
          onClick={() => setPage(1)}>
          Criar novo personagem
        </button>
        {Object.keys(players).map((item, i) => {
          return <button key={i}
          className='btn btn-outline-dark mb-3'
          style={{ width: '300px' }}
          onClick={() => openTab(players[item])}>
          {players[item].nome}
        </button>
        })}
      </div>
    </div>,
    <Creating setPage={updatePage} />,
    openUser
  ]

  const openTab = (player) => {
    setOpenUser(<Home content={player} setPage={updatePage}/>)
    setPage(2)
  }
  
  return (
    pages[page]
  )
}

export default App
