import { Context } from "../App"
import { useContext } from "react"
import { ILocationResDto } from "../types/location"

export const LocationData: React.FC<ILocationResDto>= () =>{
    const { getLocData } = useContext(Context);
    const location= getLocData?.results?.[0]
    
    return (
        <section className="grid md:grid-cols-3 grid-cols-2 p-2 gap-2">
            <div className="bg-gray-500 h-60 text-white p-4 space-y-4">
                <h2 className="text-3xl font-normal">{location?.components.country || "Country Name"}</h2>
                <h4>
                    <span className={`${getLocData ? "text-yellow-300" : ""}`}>City Name</span>: {location?.components._normalized_city || "---"}
                </h4>
                <h4>
                    <span className={`${getLocData ? "text-yellow-300" : ""}`}>Capital</span>: {location?.annotations.timezone.name.split('/')[1] || "---"}
                </h4>
                <h4><span className={`${getLocData ? "text-yellow-300" : ""}`}>Continent</span>: {location?.components.continent || "---"}</h4>
                <h4>
                    <span className={`${getLocData ? "text-yellow-300" : ""}`}>Currency</span>: {location?.annotations.currency.symbol} {location?.annotations.currency.name || "---"}
                </h4>
            </div>
            <div className="text-center">
                <div className="bg-zinc-800 text-white h-1/4 place-content-center text-lg font-medium">CALLING CODE</div>
                <div className="bg-yellow-500 text-zinc-800 place-content-center h-3/4 text-8xl">
                    {location?.annotations.callingcode || "---"}
                </div>
            </div>
            {location && 
                <img 
                    alt={`${location?.components.country} Flag`} 
                    className="h-60 w-full border-2 col-span-2 md:col-span-1"
                    src={`https://flagcdn.com/h240/${getLocData?.results?.[0]?.components.country_code?.toLowerCase()}.png`}
                />
            }
            {!location && 
                <div className="border-2 h-60 col-span-2 md:col-span-1"></div>
            }
        </section>
    )
}