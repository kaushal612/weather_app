import React,{useState,useEffect} from 'react'

import "./style.css";
import Weathercard from './weathercard';
const Temp = () => {

const [searchValue, setSearchValue] = useState("pune");


const [tempInfo, setTempInfo] = useState({});

let flag=true;

const getWeatherInfo = async()=> {
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4c350cc3d40d812471927d26da16268b`;
   
        const response = await fetch(url);
        const data=await response.json();

        const {temp,humidity,pressure} = data.main;
        const {main:weathermood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country,sunset} = data.sys;
        
        const myNewWeather = {
            temp,
            humidity,
            pressure,

            weathermood,
            name,
            speed,
            country,
            sunset,

        }
        

        console.log(data);
       setSearchValue("");
    } catch (error) {
        console.log(error);
  
       
    }
    finally{
        console.log("finally");
     
    }


};

useEffect(() => {
getWeatherInfo();  
}, []);
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' 
                    value={searchValue}
                    onChange={(e) =>{setSearchValue(e.target.value)}}
                    />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                    
                </div>
            </div>
{flag ? <Weathercard tempInfo={tempInfo}/> : <h1 style={`color:red`}>No Data Found</h1>}
            
           
        </>
    )
}

export default Temp;
