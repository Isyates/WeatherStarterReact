import React from "react"
const weatherData = (props) => {
    return(
       <>
        <p>
            <span>conditions:</span> {props.conditions}
        </p>
        <p>
        <span>time:</span> {props.time}
        </p>
  </>

    )
}

export default weatherData