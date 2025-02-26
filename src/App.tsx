import Header from "./components/Header"
import React, { createContext } from "react"
import { IWeatherResDto } from "./types/weather"
import { useQuery } from "@tanstack/react-query"
import { locationData } from "./apis/location.api"
import { ILocationResDto } from "./types/location"
import { getWeatherData } from "./apis/weather.api"
import { WeatherData } from "./components/WeatherData"
import { LocationData } from "./components/LocationData"

export type TContext = {
  getLocData: ILocationResDto | null
  getWeaData: IWeatherResDto | null;
  locationSubmitHandler: (value: string) => void
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<TContext>({
  getLocData: null,
  getWeaData: null,
  locationSubmitHandler: () => {},
  setLocation: () => {},
})

function App() {
  const [location, setLocation] = React.useState<string>("");

  const getLocData = useQuery({
    queryKey: ["get-location-data", location],
    queryFn: () =>
      locationData({
        q: location,
        key: "dfc65ad4d2004225af6322975e91f312"
      }),
    enabled: !!location,
    refetchOnWindowFocus: false
  })
  const getWeaData = useQuery({
    queryKey: ["get-weather-data", getLocData.data],
    queryFn: () => {
      const lat = getLocData.data?.results?.[0].geometry.lat;
      const lng = getLocData.data?.results?.[0].geometry.lng;

      return getWeatherData({
        lat: Number(lat),
        lng: Number(lng),
        appid: "936c3de28f2f239db4412a5897a259bf"
      })
    },
    enabled: !!getLocData.data,
    refetchOnWindowFocus: false,
  })

  const locationSubmitHandler= (value: string) =>{
    setLocation(value);
  }

  return (
    <Context.Provider
      value={{
        getWeaData: getWeaData.data || null,
        getLocData: getLocData.data || null,
        locationSubmitHandler: locationSubmitHandler,
        setLocation: setLocation
      }}
    >
      <Header/>
      <div className="container mx-auto">
        <LocationData/>
        <WeatherData/>
      </div>
    </Context.Provider>
  )
}
export default App