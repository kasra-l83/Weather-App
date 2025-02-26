import {
  Marker,
  TileLayer,
  MapContainer
} from "react-leaflet"
import React from "react"
import "leaflet/dist/leaflet.css"

export type IMap= {
  lat: number
  lng: number
}

export const Map: React.FC<IMap> = ({ lat, lng }) =>{
  const position= [lat, lng]

  return (
    <MapContainer center={position} zoom={4} className="h-60 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={position}></Marker>
    </MapContainer>
  )
}