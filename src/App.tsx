import Header from "./components/Header"
import React, { createContext } from "react"

export type TContext = {
  getWeaData;
  getLocData;
  locationSubmitHandler: (value: string) => void;
  isLoading: boolean;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export const Context = createContext<TContext>({
  getLocData: null,
  getWeaData: null,
  locationSubmitHandler: () => {},
  isLoading: false,
  setLocation: () => {},
})

function App() {
  return (
    <Header/>
  )
}
export default App