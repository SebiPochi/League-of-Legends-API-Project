import axios from "axios"

const baseUrl = 'https://la2.api.riotgames.com/lol'
const baseUrlDDragon = 'http://ddragon.leagueoflegends.com'
const API_KEY = 'RGAPI-bafb4b8d-18af-4c2f-981c-278161d16e4e'

const appendRGParams = (query) => `${baseUrl}${query}?api_key=${API_KEY}`
const appendRGDDParams = (query) => `${baseUrlDDragon}${query}?api_key=${API_KEY}`


export const getSummoner = async( summonerName ) => {
    const url = appendRGParams(`/summoner/v4/summoners/by-name/${summonerName}`)
    const res = await axios.get(url)
    return res.data
}

export const getAllChamps = async() => {
    const url = appendRGDDParams(`/cdn/12.18.1/data/en_US/champion.json`)
    const res = await axios.get(url)
    return res.data
}

export const getChampMastery = async( id ) => {
    const url = appendRGParams(`/champion-mastery/v4/champion-masteries/by-summoner/${id}`)
    const res = await axios.get(url)
    return res.data
}

export const getChampDetails = async( name ) => {
    const url = appendRGDDParams(`/cdn/12.18.1/data/en_US/champion/${name}.json`)
    const res = await axios.get(url)
    return res.data
}


// PR

// export default { getSummoner, getChampMastery}