import style from './App.module.css'
import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import { Card2 } from './components/Card2'
import App from './App'
import Modal from './components/modal'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const RickMorty = () => {
    
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [modal, setModal] = useState();

useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      console.log(response.data);
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
        alert("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page,name])


    return(
        <>
        <App/>
        {modal !== undefined && <Modal data={data[modal]} close={() => setModal()}/>} 
        <div className={style.wrapPage}>
        <h1>Rick and Morty API</h1>
          <div>
             <input type="number" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
          </div>
          <div>
             <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className={style.wrapPageRow}>
          {data.map((item, index) => { 
           return(
            // <button onClick={() => setModal(index)}>
            <Tilt options={defaultOptions}>
            <div key={item.id} onClick={() => setModal(index)}>
              <Card2 name={item.name} status={item.status} species={item.species} type={item.type} gender ={item.gender} image={item.image}/>
            </div>
            </Tilt>
            // </button>
          )
        })}
          </div>
        </div>
     </>
    )
}