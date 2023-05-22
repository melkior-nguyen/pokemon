import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Card, PokemonInfo } from './Components/index'

function App() {

  const [pokeInfo, setPokeInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setnextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokeDex, setPokeDex] = useState()

  const handlePokemon = async function () {
    setLoading(true)
    const pokeData = await fetch(url).then(res => res.json())
    setPrevUrl(pokeData.previous)
    setnextUrl(pokeData.next)
    getPokeInfo(pokeData.results)
    setLoading(false)
  }

  const getPokeInfo = async function (res) {
    res.forEach(async (item, index) => {
      const pokeUrlInfo = await fetch(item.url).then(res => res.json())
      setPokeInfo(state => {
        state = [...state, pokeUrlInfo]
        state.sort((a,b)=> a.id > b.id ? 1 : -1)
        return state
      })
    })
  }

  useEffect(() => {
    handlePokemon()
  }, [url])


  return (
    <div className="container">
      <div className='left_container'>
        <div className='card_wrap'>
          <Card
            loading={loading}
            pokeInfo={pokeInfo}
            OnClick={data => setPokeDex(data)}
          />
        </div>
        <div className='button_wrap'>
          {prevUrl && <button onClick={()=>{setUrl(prevUrl); setPokeInfo([])}}>Prev</button>}
          {nextUrl && <button onClick={()=>{setUrl(nextUrl); setPokeInfo([])}}>Next</button>}
        </div>
      </div>
      <div className='right_container'>
        <PokemonInfo PokeDex={pokeDex} />
      </div>
    </div>
  );
}

export default App;
