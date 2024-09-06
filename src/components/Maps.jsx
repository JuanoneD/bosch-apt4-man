import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility"
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const Maps = () => {
    const position = [-25.4249943, -49.2722531]
    return(
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{width: "100%", height: "700px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  }