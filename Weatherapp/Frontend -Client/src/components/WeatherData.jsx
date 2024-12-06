import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const WeatherData = () => {

  const {state} = useLocation();
  const {data} = state;
  const icon = data.weather[0].icon
  const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const navigate = useNavigate();
  const back = () =>{navigate(-1);}

  const [unit, setUnit] = useState('C'); // Celsius by default

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  const toFahrenheit = (celsius) => (celsius * 9/5) + 32;

  const displayTemp = (temp) => {
    return unit === 'C' ? `${temp}°C` : `${toFahrenheit(temp).toFixed(2)}°F`;
  };


  console.log(data)
  
  return (
    <div className = 'w-full h-[100vh] bg-blue-200'>
      <h1 className='text-[10vmin] font-bold text-center'>{data.name},{data.sys.country}</h1>
      <div className='w-full h-[30vh] flex flex-col justify-center items-center'>
       <img key = {data.id} src = {icon_url} alt={data.weather[0].main}/>
       <h3 className='text-center pt-5 font-bold text-[3.6vmin]'>{data.weather[0].description}</h3>
      </div>
      <div className='flex flex-row justify-around p-5 h-[20vh]'>
        <h1 className='text-[2.5vmin] font-bold'>Temperature Maximum:{displayTemp(data.main.temp_max)} </h1>
        <h1 className='text-[2.5vmin] font-bold'>Feels Like:{displayTemp(data.main.feels_like)}</h1>
        <h1 className='text-[2.5vmin] font-bold'>Temperature Minimum:{displayTemp(data.main.temp_min)}</h1>
      </div>
    
    <div className='text-center'>
    <button onClick={toggleUnit} className='bg-green-500 rounded-md p-3 font-bold mr-2'>Click to View Temperature in {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </button>
    <br></br>
    <br></br>
    <button onClick={back} className='bg-yellow-500 rounded-md p-3 font-bold'>Back to Search</button>
    </div>
  </div>
  );
};

export default WeatherData;
