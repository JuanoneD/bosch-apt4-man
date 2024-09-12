import style from './App.module.css'

function App() {

  return (
    <>
    <div className={style.wrapBtns}>
      <a href='/Products'><button style={{borderRadius:'10px'}}>Produtos</button></a>
      <a href='/API'><button style={{borderRadius:'10px'}}>API</button></a>
      <a href='/Map'><button style={{borderRadius:'10px'}}>Mapa</button></a>
      <a href='/Graph'><button style={{borderRadius:'10px'}} >Grafico</button></a>
    </div>
    </>
  )
}

export default App
