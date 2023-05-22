import React from 'react'
import './card.css'

function Card({ loading, pokeInfo, OnClick }) {
  return (
    <>
      {loading ? <h1>Loading...</h1> :
        pokeInfo.map((item,index) => {
          return (
            <div className='card' key= {index} onClick={()=>OnClick(item)}>
              <span className='card_id'>{item.id}</span>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                alt='pokemon image'
                className='card_img'
              />
              <span className='card_name'>{item.name}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default Card
