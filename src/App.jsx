import style from './App.module.css'

function App() {

  return (
    <>
    <div className={style.wrapBtns}>
      <a href='/Products'><button>Produtos</button></a>
      <a href='/API'><button>API</button></a>
      <a href='/Map'><button>Mapa</button></a>
      <a href='/Graph'><button>Grafico</button></a>
    </div>
    </>
  )
}

export default App
