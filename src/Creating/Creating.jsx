import { useEffect, useState } from 'react'
import Cookies from "universal-cookie"
import SetMain from './SetMain/SetMain'
import SetIdent from './SetIdent/SetIdent'
import SetCorpoBase from './SetCorpoBase/SetCorpoBase'
import SetInteracao from './SetInteracao/SetInteracao'
import SetFormacoes from './SetFormacoes/SetFormacoes'
import SetLevel from './SetLevel/SetLevel'


function Creating({ setPage }) {
    const [player, setPlayer] = useState({})
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch('/trindade-rpg/player.json', {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            setPlayer(data)
            setIndex(1)
        })
    }, [])

    const update = (func) => {
        setPlayer(prev => func(prev))
        setIndex(index + 1)
    }

    const rollback = () => {
        setIndex(index - 1)
    }

    const finish = () => {
        localStorage.setItem(player.nome, JSON.stringify(player))
        window.location.reload()
    }

    const phases = [
        <></>,
        <SetLevel update={update} />,
        <SetIdent player={player} update={update} />,
        <SetMain player={player} update={update} rollback={rollback} />,
        <SetCorpoBase player={player} update={update} rollback={rollback} />,
        <SetInteracao player={player} update={update} rollback={rollback} />,
        <SetFormacoes player={player} update={(func) => setPlayer(prev => func(prev))} rollback={rollback} finish={finish} />
    ]

    return (
        <>
            <div className='mb-5 d-flex justify-content-center text-light'>
                <h1>Trindade</h1>
                <button onClick={() => setPage(0)} className='btn btn-close' style={{transform: 'translatex(2rem)'}}></button>
            </div>
            <div className='d-flex justify-content-center overflow-auto'>
                {phases[index]}
            </div>
        </>
    )
}

export default Creating
