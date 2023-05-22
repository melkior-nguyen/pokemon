import React from 'react'
import './pokemoninfo.css'

function PokemonInfo({ PokeDex }) {
  return (
    <>
      {PokeDex &&
        (<div className='pokeinfo'>
          <div className='pokeinfo_img'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${PokeDex.id}.svg`}
              alt='poke-img'
            />
          </div>
          <div className='pokeinfo_abilities'>
            {PokeDex.abilities.map((item, index) => {
              return (<span className='pokeinfo_ability'>{item.ability.name}</span>)
            })}
          </div>
          <div className='pokeinfo_stats'>
            {PokeDex.stats.map((item, index) => {
              return (
                <>
                  <h3>{item.stat.name}: {item.base_stat}</h3>
                </>
              )
            })}
          </div>
        </div>)
      }
    </>
  )
}

export default PokemonInfo
