import { useState, useEffect } from 'react'
import { Card2 } from './components/Card2'
import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

function App() {
  const [show, setShow] = useState("")
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
  }, [page])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.wrapPageRow}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
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
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
