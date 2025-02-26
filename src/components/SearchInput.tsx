import React from "react"
import { Context } from "../App"
import { useDebounce } from "../hooks/Debounce"

export const SearchInput: React.FC= () =>{
  const [value, setValue] = React.useState<string>("");

  const debounceValue= useDebounce({ orgValue: value, timeout: 1000 })

  const { locationSubmitHandler }= React.useContext(Context);

  const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value);
  }

  React.useEffect(() =>{
    locationSubmitHandler(debounceValue);
  }, [debounceValue, locationSubmitHandler])

  return (
    <input
      id="search"
      type="search"
      value={value}
      onChange={onChangeHandler}
      placeholder="Search for city or country"
      className="rounded max-w-[700px] w-full h-10 px-2"
    />
  )
}