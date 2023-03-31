
import axios from 'axios';

export const API = 'https://swapi.dev/api';
export const STARSHIPS = 'starships';
export const PILOTS = 'people'

class StarWarService {
    service = axios.create({ baseURL: 'https://swapi.dev/api/' });
    async fetchStarWars (){
       return (await this.service.get('starships')).data
    }

    async fetchPilot(url) {
        return (await axios.get(url)).data
    }
}
const starWarService = new StarWarService();

export  default starWarService