import { Context } from "../App"
import { useContext } from "react"
import { ILocationResDto } from "../types/location"

export const LocationData: React.FC<ILocationResDto>= () =>{
    const { getLocData } = useContext(Context);
    const location= getLocData?.results?.[0]
    
    return (
        <section className="grid grid-cols-3 p-2 gap-x-2">
            <div className="bg-gray-500 h-60 text-white p-4 space-y-4">
                <h2 className="text-3xl font-normal">{location?.components.country || "Country Name"}</h2>
                <h4>City Name: {location?.components._normalized_city || "---"}</h4>
                <h4>Capital: {location?.annotations.timezone.name.split('/')[1] || "---"}</h4>
                <h4>Continent: {location?.components.continent || "---"}</h4>
                <h4>Currency: {location?.annotations.currency.symbol} {location?.annotations.currency.name || "---"}</h4>
            </div>
            <div className="text-center">
                <div className="bg-zinc-800 text-white h-1/4 place-content-center text-lg font-medium">CALLING CODE</div>
                <div className="bg-yellow-500 text-zinc-800 place-content-center h-3/4 text-8xl">{location?.annotations.callingcode || "---"}</div>
            </div>
            {location && 
                <img 
                    alt={`${location?.components.country} Flag`} 
                    className="h-60 max-w-[522.66px] w-full border-2"
                    src={`https://flagcdn.com/h240/${getLocData?.results?.[0]?.components.country_code?.toLowerCase()}.png`}
                />
            }
            {!location && 
                <div className="border-2"></div>
            }
        </section>
    )
}