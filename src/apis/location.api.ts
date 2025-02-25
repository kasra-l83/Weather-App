import { urls } from "./urls"
import { generateClient } from "./client"

export const getLocationData = async (params) => {
    const client= generateClient();
    const response= await client.get(urls.location, {
        params: {
            q: params.q,
            key: params.key
        }
    })
    return response.data;
}