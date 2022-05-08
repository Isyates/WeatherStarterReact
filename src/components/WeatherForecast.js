import React from "react";
import WeatherIcon from "./weatherIcon";
import WeatherData from "./WeatherData"

const WeatherForecast = (props) => {
return(
    <div class="weather">
    <WeatherIcon img={props.img}/>
    <WeatherData conditions = {props.conditions} time={props.time} />
    </div>
);
}

export default WeatherForecast