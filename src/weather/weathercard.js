import React,{useEffect} from 'react'
import "./style.css"

const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = React.useState({})

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;


    useEffect(() => {

        if (weathermood) {
            switch (weathermood) {

                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Rain":
                    setWeatherState("wi-day-rain");
                    break;
                case "Snow":
                    setWeatherState("wi-day-snow");
                    break;
                case "Thunderstorm":
                    setWeatherState("wi-day-thunderstorm");
                    break;

                 case "Mist":
                    setWeatherState("wi-day-fog");  
                    break;

                    case "Haze":
                    setWeatherState("wi-day-fog");  
                    break;

                    case "Smoke":   
                    setWeatherState("wi-day-fog");
                    break;


                default:
                    setWeatherState("wi-day-sunny");
                    break;




            }
        }

    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
        <>
            {/* our temp card */}

            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>

                </div>
                <div className="weatherInfo">
                    <div className='temperature'>
                        <span>{temp}&deg;</span>

                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>

                        <div className='place' >{name}, {country}</div>



                    </div>




                </div>

                <div className='date'>{new Date().toLocaleString()}</div>

                {/* our 4column section */}

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='tow-sided-section'>
                            <p><i className="wi wi-sunset"></i></p>
                            <p className='extra-info-leftside'> {formattedTime}<br />
                                Sunset
                            </p>
                        </div>

                        <div className='tow-sided-section'>
                            <p><i className="wi wi-humidity"></i></p>
                            <p className='extra-info-leftside'> {humidity}<br />
                                Humidity
                            </p>


                        </div>


                    </div>
                    <div className='weather-extra-info'>

                        <div className='tow-sided-section'>
                            <p><i className="wi wi-rain"></i></p>
                            <p className='extra-info-leftside'>{pressure}<br />
                                pressure
                            </p>


                        </div>

                        <div className='tow-sided-section'>
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className='extra-info-leftside'> {speed}<br />
                                Speed
                            </p>


                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard;
