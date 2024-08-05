import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { memo, useState } from "react";
import { useNavigate } from "react-router";
import { useCities } from "../../contexts/CitiesContext";
import { CityType } from "../../types/types";

function AddMark() {
  const [position, setPosition] = useState([]) as [number[], Function];
  const navigate = useNavigate();

  useMapEvents({
    click(ev) {
      console.log(ev);
      setPosition([ev.latlng.lat, ev.latlng.lng]);
      navigate(`/app/form?lat=${ev.latlng.lat}&lng=${ev.latlng.lng}`);
    },
  });

  return position.length !== 0 ? (
    <Marker position={[position[0], position[1]]}></Marker>
  ) : null;
}

function FlytoPos({ pos }: { pos: Array<number> }) {
  const map = useMap();

  if (pos.length === 2) map.flyTo([pos[0], pos[1]], 13);

  return null;
}

const Map = memo(function Map() {
  const { citiesList, selectedCityPosition } = useCities();
  console.log("Map");
  return (
    <div style={{ height: "100%", width: "70%" }}>
      <MapContainer center={[51.05, 21.05]} zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMark />
        {citiesList?.map((city: CityType, index) => {
          return (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={index}
            >
              <Popup>
                <h3>
                  {city.emoji} {city.cityName}
                </h3>
                <br />
                {city.notes}
              </Popup>
            </Marker>
          );
        })}
        <FlytoPos pos={selectedCityPosition} />
      </MapContainer>
    </div>
  );
});

export default Map;
