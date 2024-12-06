# Weather-Application

**Weather App**
This is a simple weather forecasting web application built using React for the frontend and Node.js for the backend. The application allows users to input a city name and retrieve the current weather data for that city using the OpenWeatherMap API. The app is containerized using Docker, allowing for easy deployment.

**Features**
Search for current weather by city name
Display weather details including temperature, weather conditions, and an icon representing the weather
Toggle temperature units between Celsius and Fahrenheit
Responsive design for seamless use on different devices

**Technologies Used**
Frontend: React, React Router
Backend: Node.js, Express.js
API: OpenWeatherMap API
Styling: Tailwind CSS

**Setup and Installation
Prerequisites**
Node.js and npm

**Setting Up the Backend**
1. Create a .env file in the root directory of the backend and add your OpenWeatherMap API key. (I didn't add the .env file because it is a sensitive information)

2. Navigate to the backend directory and install the dependencies

**Setting Up the Frontend**
Navigate to the frontend directory and install the dependencies:

**Usage**
1. On the homepage, enter the name of the city for which you want to get the weather information.
2. Click the "Search" button.
3. The app will display the weather details for the specified city.
4. You can toggle the temperature unit between Celsius and Fahrenheit using the provided button.
5. Click "Back to Search" to perform a new search.

**Project Structure**
weather-app/
├── backend/
│   ├── index.js
│   ├── package.json
│   
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.jsx
│   │   │   └── WeatherData.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env (Add your own .env file here)
|── package.json
|── package-lock.json
└── README.md

**Contact**
For any questions or feedback, please contact ponswarnalaya.r@gmail.com.
