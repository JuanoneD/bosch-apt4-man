/* eslint-disable react/prop-types */
import style from '../App.module.css';

export const Card = (props) => {
  return(
      <div className={style.card}>
          <h1>{props.name}</h1>
          <h2>{props.desc}</h2>
          <p>{props.value}</p>
          <div className={`${props.status}?'greenball':'redball'`}></div>
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}