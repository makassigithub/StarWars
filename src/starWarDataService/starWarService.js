
import axios from 'axios';
import { formatObject } from '../utils/titlize';

export const API = 'https://swapi.dev/api';
export const STARSHIPS = 'starships';
export const PILOTS = 'people'

class StarWarService {
    service = axios.create({ baseURL: 'https://swapi.dev/api/' });

    async fetchStarWars (){
        let data = null;
            try{
                let starShips = (await this.service.get('starships')).data;
                const formated = starShips.results.map(obj=> formatObject(obj));
                data = formated;
            } catch(e) {
                console.log(e);
            }
       return  data;
    }

    async fetchPilot(url) {
        let data = null;
            try {
                const item =  (await axios.get(url)).data;
                const formated = formatObject(item);
               data = formated;
            }catch(e){
              console.log(e);
            }
        return data;
    }
}
const starWarService = new StarWarService();

export  default starWarService