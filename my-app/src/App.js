import './App.css';
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useMemo } from 'react';

export default function App() {
  
  const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBpOAv7pgGXTnhaJ4PoG1hpyhdOFJ8a9II"});
  
  if(!isLoaded) return <div>Loading map...</div>
  return <Map />;
}

function Map(){

  const center = useMemo(() => ({ lat: 44,  lng: 56}), []);

  return <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
    <Marker position={center} />
  </GoogleMap>
}
