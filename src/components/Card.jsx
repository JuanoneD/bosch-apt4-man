/* eslint-disable react/prop-types */
import style from '../App.module.css';

export const Card = ({name,desc,value,image,key,status}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <div className={status?style.greenBall:style.redBall}></div>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}