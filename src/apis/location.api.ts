import { urls } from "./urls"
import { generateClient } from "./client"
import { ILocationReqDto, ILocationResDto } from "../types/location"

type locationDataType = (_: ILocationReqDto) => Promise<ILocationResDto>;

export const locationData: locationDataType= async (params) => {
    const client= generateClient();
    const response= await client.get(urls.location, {
        params: {
            q: params.q,
            key: params.key
        }
    })
    return response.data;
}