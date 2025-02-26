import Header from "./components/Header"
import React, { createContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { locationData } from "./apis/location.api"
import { LocationData } from "./components/LocationData"

export type TContext = {
  getLocData;
  locationSubmitHandler: (value: string) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<TContext>({
  getLocData: null,
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

  const locationSubmitHandler= (value: string) =>{
    setLocation(value);
  }

  return (
    <Context.Provider
      value={{
        getLocData: getLocData.data || null,
        locationSubmitHandler: locationSubmitHandler,
        setLocation: setLocation
      }}
    >
      <Header/>
      <div className="container mx-auto">
        <LocationData/>
      </div>
    </Context.Provider>
  )
}
export default App