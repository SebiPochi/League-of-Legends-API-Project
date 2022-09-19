import axios from "axios"

const baseUrl = 'https://la2.api.riotgames.com/lol'
const API_KEY = 'RGAPI-7bd073a4-3dd5-4d6c-b491-75cee474597b'

const appendRGParams = (query) => `${baseUrl}${query}?api_key=${API_KEY}`


export const getSummoner = async( summonerName ) => {
    const url = appendRGParams(`/summoner/v4/summoners/by-name/${summonerName}`)
    const res = await axios.get(url)
    return res.data
}

export const getChampMastery = async( id ) => {
    const url = appendRGParams(`/champion-mastery/v4/champion-masteries/by-summoner/${id}`)
    const res = await axios.get(url)
    return res.data

}

// PR

// export default { getSummoner, getChampMastery}