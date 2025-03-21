import { TileLayer, Marker, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [36.3109408, 59.5121897];

const MapShop = () => {
  return (
    <div className="lg:max-w-full mx-auto z-[5] h-[17rem] lg:h-[25rem]  ">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position} // ✅ مرکز نقشه
        zoom={12} // ✅ سطح زوم
        scrollWheelZoom={true} // ✅ فعال‌سازی اسکرول برای زوم
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapShop;
