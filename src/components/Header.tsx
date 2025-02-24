function Header(){
  return(
    <header className="bg-zinc-800 h-24 text-center py-1 space-y-2">
      <h1 className="text-yellow-500 text-2xl font-semibold">Weather App</h1>
      <input type="text" className="rounded max-w-[700px] w-full h-10"/>
    </header>
  )
}
export default Header