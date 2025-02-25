import axios from "axios"

const serverUrl= "https://api.opencagedata.com";

export const generateClient= () =>{
    return axios.create({
        baseURL: serverUrl
    })
}