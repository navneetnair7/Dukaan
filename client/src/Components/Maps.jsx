import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [circle, setCircle] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position);
      });
    }
  }, []);

  const handleSubscribe = (e, place) => {
    axios.post(`http://localhost:4000/subscribe/${name}`, {
      store: place.name,
      address: place.address
    })
      .then(res => {
          // console.log(res);
      })
  }

  useEffect(() => {
    if (position) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15,
      });

      const request = {
        location: map.getCenter(),
        radius: "500",
        type: ["supermarket"],
      };

      const service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const filteredResults = results.filter((place) => place.business_status === "OPERATIONAL");
          setFilteredResults(filteredResults);
          setMarkers(filteredResults.map((place) => {
            const marker = new window.google.maps.Marker({
              position: place.geometry.location,
              map,
            });
            return marker;
          }));
        }
      });

      const circleOptions = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        radius: 500,
      };

      const circle = new window.google.maps.Circle(circleOptions);
      setCircle(circle);
    
    }
  }, [position]);

  return (
    <div className="bg-slate-100 h-screen">
        <p className="text-4xl m-5">Available Shops based in your location</p>
        <div>
          <div className="flex m-5 h-full">
            <div className="w-1/2">
            {filteredResults.length > 0 && (
              <div className="flex flex-wrap justify-center">
                  {filteredResults.map((place) => (
                  <div key={place.id} className="flex flex-col justify-center border rounded-xl shadow-md p-5 w-2/3 h-1/5 m-5 text-center text-lg bg-yellow-50">
                      <h3><b>Store Name:</b> {place.name}</h3>
                      <p><b>Address: </b>{place.vicinity}</p>
                      <div>
                      <button className="border rounded-xl bg-ouryellow hover:bg-yellow-700 hover:text-white border-black w-3/5 h-10 mt-5" onClick={(e) => handleSubscribe(e, {name: place.name, address: place.vicinity})}>Subscribe</button>
                      </div>
                  </div>
                  ))}
              </div>
            )}
            </div>
            <div className="w-1/2 flex flex-col">
              <div id="map" style={{ height: "500px", width: "100%" }} className="rounded-xl fixed"></div>
            </div>
          </div>
          <button className="border border-ouryellow rounded-lg w-1/5 h-10 ml-72 hover:bg-ouryellow hover:text-white" onClick={() => {navigate(`/profile/${name}`)}}>Done</button>
    </div>
  </div>
  );
}

export default App;
