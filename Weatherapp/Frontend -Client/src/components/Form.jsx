// import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  
    const [cityname, setCityName] = useState('');
    const navigate = useNavigate();


        const handleSubmit = async (e) =>{
            e.preventDefault(); 
            const weatherData = await axios.post('http://localhost:5000', {cityname})
            console.log(weatherData.data)
            navigate('/weather', {state: {data: weatherData.data}});
    }
  
  
    return (
    <div className='w-full h-[100vh] bg-blue-200 flex justify-center items-center'>
        <div className='text-center'>
        <h1 className='text-4xl font-bold mb-6 '>Weather Forecasting of Cities Around the World</h1>
       <form onSubmit = {handleSubmit}>
        <input className='text-center border border-black rounded-md' 
        type = 'text' 
        name='cityname' 
        placeholder='Enter city name here'
        onChange = {e=>setCityName(e.target.value)} required/>
        <br></br>
        <br></br>
        <div className= 'text-center'>
        <button className='bg-yellow-500 rounded-md p-3 font-bold'>Search
        </button></div>
        </form>
    </div>
    </div>
  );
};

export default Form
