import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Menu from  "./components/Menu"

export const Contact = () => {
    const geoData = ({lat:-25.4249247 , long:-49.273092})
    return(
        <>
        <Menu />
        <div>
            <h1>Contato</h1>
            <div>
                <h2>Mapa</h2>
                <div>
                <MapContainer center={[geoData.lat, geoData.long] } zoom={13} scrollWheelZoom={false} style={{width: "90%", height: "700px"}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geoData.lat, geoData.long]}>
                    <Popup>
                        <a href={`https://www.google.com/maps/place/Centre+Doctors+and+Co/@${geoData.lat},${geoData.long}.5z/data=!4m9!1m2!2m1!1ssenai+paula+gomes!3m5!1s0x94dce522f3fa6011:0x7e2fdb8c0eaf9!8m2!3d-25.4247909!4d-49.2728759!16s%2Fg%2F11tjx4z59f?entry=ttu`}>Google Maps</a>
                        <p>R. Paula Gomes, 330 - São Francisco, Curitiba - PR, 80510-070</p>
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>
        </>
    )
}