import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Menu from  "./components/Menu"
import style from "./Contact.module.css"
import { useState } from 'react';

export const Contact = () => {
    const geoData = ({lat:-25.4249247 , long:-49.273092})

    const defaultPhoneNumber = '554199999999'

    const[ formData, setformData ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const hadleChange = (e) => {
        const{name, value} = e.taget;
        setformData({...formData, [name]: value})
    }

    const handleZap = () => {
        const {name, email, message} = formData;

        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}$text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem%20${message}%0D%0A`

        window.open(urlZAPZAP, '_blank')
    }
    return(
        <>
        <Menu />
        <div className={style.sectionContact}>
            <h1>Contato</h1>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={hadleChange} required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={formData.email} onChange={hadleChange} required />
            </div>
            <div>
                <label htmlFor="message">Mensagem</label>
                <input type="text" id='message' name='message' value={formData.message} onChange={hadleChange} required />
            </div>
            <button onClick={handleZap}>Enviar mensagem</button>
            <div>
                <h2>Mapa</h2>
                <div>
                <MapContainer center={[geoData.lat, geoData.long] } zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
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