import { Context } from "../App"
import React, { useContext } from "react"
import { IWeatherResDto } from "../types/weather"

export const WeatherData: React.FC<IWeatherResDto> = () =>{
  const { getWeaData } = useContext(Context);

  return (
    <section className="grid grid-cols-2 px-2 gap-x-2 md:grid-cols-3">
      <div className="border-2 h-60">
        <div className="bg-gray-500 text-yellow-300 h-1/5 text-center place-content-center text-xs font-semibold md:text-xl">CAPITAL WEATHER REPORT</div>
        <div className="h-4/5 flex flex-col px-4 justify-between">
          {getWeaData && (
            <>
              <img className="place-self-center" src={`http://openweathermap.org/img/wn/${getWeaData?.weather?.[0].icon}@2x.png`} alt="" />
              <h2 className="text-center mt-[-25px] text-yellow-500">{getWeaData.weather[0].description}</h2>
            </>
          )}
          <h4>Wind speed: {getWeaData ? `${getWeaData?.wind?.speed}MF` : "---"}</h4>
          <h4>Temperature: {getWeaData ? `${getWeaData?.main?.temp}F` : "---"}</h4>
          <h4>Humidity: {getWeaData ? `${getWeaData?.main?.humidity}%` : "---"}</h4>
          <h4>Visibility: {getWeaData ? `${getWeaData?.visibility}m` : "---"}</h4>
        </div>
      </div>
      <div className="border-2 md:col-span-2"></div>
    </section>
  )
}