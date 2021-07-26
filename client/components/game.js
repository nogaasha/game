import React, { useState, useEffect } from 'react';
import './game.scss';

const Game = () => {
  const height = 5
  const width = 5
  const countForWin = Math.ceil((width * height) / 2)

  const [gameOver, setGameOver] = useState('')
  const [computer, setComputer] = useState('')
  const [user, setUser] = useState('')

  const [gameField, setGameField] = useState(
    new Array(height * width).fill(null).map((it, index) => {
      return {
        id: index,
        state: 'free',
      }
    })
  )
  const getRandomField = () => {
    const gameFieldFree = gameField.filter((it) => it.state === 'free')
    return gameFieldFree[Math.floor(Math.random() * gameFieldFree.length)].id
  }

  const [selected, setSelected] = useState(getRandomField())
  const [tid, setTimeoutId] = useState(null)

  const updateState = (id, state) => {
    setGameField(
      gameField.map((it) => {
        return {
          ...it,
          state: it.id === id ? state : it.state,
        }
      })
    )
    setSelected(getRandomField())

    clearTimeout(tid)
  }

  const chooseNextRound = (selected2) => {
    const timeoutId = setTimeout(() => {
      updateState(selected2, 'computer')
    }, 1000)
    setTimeoutId(timeoutId)
  }

  useEffect(() => {
    const computerFields = gameField.filter((it) => it.state === 'computer')
    setComputer(computerFields.length)
    const userFields = gameField.filter((it) => it.state === 'user')
    setUser(userFields.length)

    if (computerFields.length >= countForWin) {
      setGameOver('computer win')
      setSelected(null)
    }
    if (userFields.length >= countForWin) {
      setGameOver('user win')
      setSelected(null)
    }
    if (
      computerFields.length < countForWin
      && userFields.length < countForWin
    ) {
      setGameOver('fire')
      chooseNextRound(selected)
    }
  }, [selected])

  return (
    <div>
      {/* <Head title="Hello" /> */}
      <div className="px-8 mx-auto text-red-900 text-3xl">{gameOver}</div>
      <div className="flex flex-row text-indigo-800">
        <div className="px-6">Computer:</div>
        <div className="text-2xl">{computer}</div>
        <div className="px-6">User:</div>
        <div className="text-2xl">{user}</div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div
          className="flex flex-wrap"
          style={{ flexBasis: `${width * 88}px` }}
        >
          {gameField.map((it) => {
            const classes = `
              ${it.state === 'free' ? ' bg-gray-200' : ''}
              ${it.id === selected ? ' bg-yellow-200' : ''}
              ${it.state === 'user' ? ' bg-green-200' : ''}
              ${it.state === 'computer' ? ' bg-red-200' : ''}`

            return (
              <button
                className={`box border-gray-500 border-2${classes}`}
                key={it.id}
                type="button"
                aria-label="click"
                onClick={() => {
                  if (it.id === selected) {
                    updateState(it.id, 'user')
                  }
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Game