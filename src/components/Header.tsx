import { SearchInput } from "./SearchInput"

function Header(){
  return(
    <header className="bg-zinc-800 h-24 text-center py-1 space-y-2">
      <h1 className="text-yellow-500 text-2xl font-semibold">Weather App</h1>
      <SearchInput/>
    </header>
  )
}
export default Header