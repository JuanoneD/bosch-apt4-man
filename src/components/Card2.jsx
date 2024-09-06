/* eslint-disable react/prop-types */
import style from '../App.module.css';

export const Card2 = ({name, status, species, type, gender,image}) => {
    return(
        <div className={style.card}>
            <h1>{name}</h1>
            <h2>{status}</h2>
            <h3>{species}</h3>
            <p>{type}</p>
            <p>{gender}</p>
            <img src={image} alt={gender} width={150} height={"auto"}/>
        </div>
    )
  }