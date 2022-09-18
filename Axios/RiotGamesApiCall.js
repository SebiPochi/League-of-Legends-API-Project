import axios from "axios";

const baseUrl = 'https://static.developer.riotgames.com/docs/lol'
export const apiCallRiot = async() => {
    try {
        const response = await axios.get(`${baseUrl}/gameModes.json`)
        return response.data
    }
    catch (error) {
        console.log(error)
        return error
    }
}