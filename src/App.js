import React from "react";
import "./styles.css";
import WeatherCard from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App(props) {
  const allWeatherData = WeatherCard.map ((ele,index) => {
    return <WeatherForecast img={ele.img} conditions={ele.conditions} time={ele.time} key={index}/>
  }) ;

  return (
    <div className="App">
      <section>
      {allWeatherData}
      </section>
    </div>
  );
}
