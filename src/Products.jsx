import style from './App.module.css'
import produtos from './constants/produtos.json'
import { Card } from './components/Card'
import App from './App'

export const Products = () => {
    return(
     <>
      <App/>
      <div className={style.wrapPage}>
          <h1>Showroom de produtos</h1>
            <div className={style.wrapPageRow}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status}/>
              )
             })}
            </div>
      </div>
        </>
    )}
     