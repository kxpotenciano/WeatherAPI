import React, { useState } from 'react';


function App() {
  const api = {
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [queue, setQueue] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${queue}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQueue('');
          console.log(result);
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main className='min-h-screen p-[25px]'>
        <div className="content-center items-center place-items-center justify-items-center ">
          <input 
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
            placeholder="City"
            onChange={e => setQueue(e.target.value)}
            value={queue}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="text-center">
            <div className="relative inline-block text-white text-[50px] font-black mx-auto my-[30] px-[25] py-[15]">{weather.name}, {weather.sys.country}</div>
          </div>

          <div className="text-center">
            <div className="relative inline-block text-white text-[50px] font-black mx-auto my-[30] px-[25px] py-[15]">Temperature: {Math.round(weather.main.temp)}°C</div>
            <div className="relative inline-block text-white text-[50px] font-black mx-auto my-[30] px-[25px] py-[15]">Humidity: {weather.main.humidity}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}
export default App;













