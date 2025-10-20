import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const API_KEY = "1v1GETkvnTlxbHkLdUkqu0W64O5CsYpvw6D8fr";
const API_PARAMS = { key: API_KEY };
// If you need to call the NASA API, use fetch() or another JS HTTP client.
// e.g. fetch("https://api.nasa.gov/...", { method: "GET", params: API_PARAMS })

const AVAILABLE_LAYERS = [
  {
    id: "modis",
    name: "MODIS Terra True Color",
    layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
    tileMatrixSet: "GoogleMapsCompatible_Level9",
    format: "jpg",
    opacity: 1.0,
  },
  {
    id: "viirs",
    name: "VIIRS SNPP True Color",
    layer: "VIIRS_SNPP_CorrectedReflectance_TrueColor",
    tileMatrixSet: "GoogleMapsCompatible_Level9",
    format: "jpg",
    opacity: 0.9,
  },
  {
    id: "blue_marble",
    name: "Blue Marble",
    layer: "BlueMarble_ShadedRelief_Bathymetry",
    tileMatrixSet: "GoogleMapsCompatible_Level9",
    format: "jpg",
    opacity: 0.8,
  },
];

function TileLayerWrapper({ spec, time }) {
  const url = useMemo(() => {
    return GIBS_TILE_TEMPLATE.replace(/{layer}/g, spec.layer)
      .replace(/{time}/g, time)
      .replace(/{tileMatrixSet}/g, spec.tileMatrixSet)
      .replace(/{format}/g, spec.format);
  }, [spec, time]);

  return (
    <TileLayer
      url={url}
      opacity={spec.opacity}
      tileSize={256}
      attribution='Imagery © NASA GIBS'
    />
  );
}

function ResetViewButton({ center, zoom }) {
  const map = useMap();
  return (
    <button
      onClick={() => map.setView(center, zoom)}
      className="absolute top-3 right-3 bg-white px-3 py-1 rounded shadow text-sm"
    >
      Reset View
    </button>
  );
}

export default function GIBSToggleMap() {
  const [time, setTime] = useState("default");
  const [enabled, setEnabled] = useState({ modis: true, viirs: false, blue_marble: false });

  const toggleLayer = (id) => setEnabled((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative h-[600px] rounded-lg overflow-hidden shadow-md">
        <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {AVAILABLE_LAYERS.map(
            (l) => enabled[l.id] && <TileLayerWrapper key={l.id} spec={l} time={time} />
          )}
          <ResetViewButton center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} />
        </MapContainer>
      </div>

      <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3">NASA GIBS Layers</h3>

        <label className="block text-sm font-medium mb-1">Date (YYYY-MM-DD or default)</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        {AVAILABLE_LAYERS.map((l) => (
          <div key={l.id} className="border rounded p-2 mb-2 flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={enabled[l.id]}
                onChange={() => toggleLayer(l.id)}
              />
              <span>{l.name}</span>
            </label>
            <span className="text-xs text-gray-600">{l.format}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
