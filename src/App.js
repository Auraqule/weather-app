import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [countryInitials, setCountryInitials] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const fetchWeatherInfos = async () => {
    const response = await axios.get(API_URL);
    const data = await response.data;
    setDegrees(data?.main?.temp);
    setCountry(data?.name);
    setWind(data?.wind?.speed);
    setHumidity(data?.main?.humidity);
    setCountryInitials(data?.sys?.country);
    setIcon(data?.weather[0]?.icon);

    setDescription(data?.weather[0]?.description);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchWeatherInfos();
  };

  return (
    <div className="app">
      <Header
        submitHandler={submitHandler}
        location={location}
        setLocation={setLocation}
      />
      <main className="app_main">
        <h1 className="app_weather">Weather in {location}</h1>
        <h1 className="app_degree">{degrees}°C</h1>
        <div className="app_clouds">
          <div className="app-weather_img">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
          </div>
          <div className="app-weather_decription">
            Desc:<span className="unique"> {description} </span>
          </div>
        </div>
        <div className="app_bottom-container">
          <div className="app_atmosphere">
            <p className="humidity">
              Humidity: <span className="unique"> {humidity}% </span>
            </p>
            <p className="wind-speed">
              Wind speed: <span className="unique">{wind}m/s </span>{" "}
            </p>
          </div>
          <div className="country-initials">
            <p>{countryInitials}</p>
            <p>2022, May, 31</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
