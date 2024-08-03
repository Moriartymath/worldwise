import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCities } from "../../contexts/CitiesContext";

function AddMark() {
  const [position, setPosition] = useState([]) as [number[], Function];
  const navigate = useNavigate();

  const map = useMapEvents({
    click(ev) {
      console.log(ev);
      setPosition([ev.latlng.lat, ev.latlng.lng]);
      navigate(`/app/form?lat=${ev.latlng.lat}&lng=${ev.latlng.lng}`);
    },
  });

  return position.length !== 0 ? <Marker position={position}></Marker> : null;
}

function Map() {
  const { citiesList } = useCities();

  return (
    <div style={{ height: "100%", width: "70%" }}>
      <MapContainer center={[51.05, 21.05]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMark />
        {citiesList?.map((city, index) => {
          return (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={index}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
