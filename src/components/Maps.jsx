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
            <a href='https://www.google.com/maps/place/R.+Paula+Gomes,+347-181+-+S%C3%A3o+Francisco,+Curitiba+-+PR,+82590-300/@-25.4250119,-49.2733457,16.72z/data=!4m19!1m12!4m11!1m3!2m2!1d-49.2722531!2d-25.4249943!1m6!1m2!1s0x94dce41197a84179:0x142fc7abe5169a05!2sR.+Paula+Gomes,+270+-+S%C3%A3o+Francisco,+Curitiba+-+PR,+80510-070!2m2!1d-49.272306!2d-25.4249717!3m5!1s0x94dce411bff2449f:0x97525380e509410d!8m2!3d-25.4250407!4d-49.2722568!16s%2Fg%2F11c6563k4l?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'>⚓</a>
          </Popup>
        </Marker>
      </MapContainer>
    )
  }