import Draggable from 'react-draggable';
import { Card2 } from '../../src/components/Card2'

const ModalInfo = (props) => {
    return(
        <Draggable>
            <div style={{position:'absolute',zIndex:'22'}}>
            <Card2 name={props.data.name} status={props.data.status} species={props.data.species} type={props.data.type} gender ={props.data.gender} image={props.data.image}/>   
            </div>
        </Draggable>
    )
}
export default ModalInfo;