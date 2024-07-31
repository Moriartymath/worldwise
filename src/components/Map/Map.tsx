import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function AddMark() {
  const [position, setPosition] = useState([]) as [number[], Function];
  console.log(position);
  const map = useMapEvents({
    click(ev) {
      map.locate();
      setPosition([ev.latlng.lat, ev.latlng.lng]);
    },
  });

  return position.length !== 0 ? <Marker position={position}></Marker> : null;
}

function Map() {
  return (
    <div style={{ height: "100%", width: "70%" }}>
      <MapContainer center={[51.05, 21.05]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMark />
      </MapContainer>
    </div>
  );
}

export default Map;
