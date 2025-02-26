import { urls } from "./urls"
import { weatherUrl } from "./client"
import { IWeatherReqDto, IWeatherResDto } from "../types/weather"

type getWeatherDataType = (_: IWeatherReqDto) => Promise<IWeatherResDto>

export const getWeatherData: getWeatherDataType = async (params) =>{
  const client= weatherUrl();
  const response = await client.get(urls.weather, {
    params: {
      lat: params.lat,
      lon: params.lng,
      appid: params.appid
    }
  })
  return response.data;
}