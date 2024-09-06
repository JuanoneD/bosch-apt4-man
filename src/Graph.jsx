import { LineChart, Line, CartesianGrid, XAxis,YAxis } from 'recharts';
import App from './App';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page b', uv: 330, pv: 2000, amt: 2000},
    {name: 'Page c', uv: 220, pv: 2000, amt: 2000},
    {name: 'Page d', uv: 110, pv: 2000, amt: 2000},
];
import style from './App.module.css'


export const Graph1 = () => {
    return(
    <>
        <App/>
    <div className={style.wrapPage}>
        <h1>Titulo1</h1>
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      <br/>
        <h1>Titulo2</h1>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
    </div>
    </>
    )
}
