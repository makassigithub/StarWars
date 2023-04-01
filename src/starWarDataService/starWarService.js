
import axios from 'axios';
import { formatObject } from '../utils/titlize';

export const API = 'https://swapi.dev/api';
export const STARSHIPS = 'starships';
export const PILOTS = 'people'

class StarWarService {
    service = axios.create({ baseURL: 'https://swapi.dev/api/' });

    async fetchStarWars (){
        let starShips = (await this.service.get('starships')).data;
        const formated = starShips.results.map(obj=> formatObject(obj));
        return formated;
    }

    async fetchPilot(url) {
        const item =  (await axios.get(url)).data;
        return formatObject(item);
    }
}
const starWarService = new StarWarService();

export  default starWarService