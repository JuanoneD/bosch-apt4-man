import style from './App.module.css'
import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import { Card2 } from './components/Card2'
import App from './App'

export const RickMorty = () => {
    
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")

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
        <div className={style.wrapPage}>
        <h2>Rick and Morty API</h2>
          <div>
             <input type="number" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
          </div>
          <div>
             <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className={style.wrapPageRow}>
          {data.map((item) => { 
           return(
            <div key={item.id}>
            <Card2 name={item.name} status={item.status} species={item.species} type={item.type} gender ={item.gender} image={item.image}/>
              {/* <button onClick={() => {}}>Info</button> */}
            </div>
            )
         })}
          </div>

        </div>
     </>
    )
}