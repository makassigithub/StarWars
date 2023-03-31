
import axios from 'axios';
import { formatObject } from '../utils/titlize';

export const API = 'https://swapi.dev/api';
export const STARSHIPS = 'starships';
export const PILOTS = 'people'

class StarWarService {
    service = axios.create({ baseURL: 'https://swapi.dev/api/' });


    async fetchStarWars (){
        let data = localStorage.getItem('starWars');
        if(data){
             data = JSON.parse(data);
        }else{
            try{
                let starShips = (await this.service.get('starships')).data;
                const formated = starShips.results.map(obj=> formatObject(obj));
                localStorage.setItem('starWars',JSON.stringify(formated));
                data = formated;
            } catch(e) {
                console.log(e);
                data = null;
            }
        }
       return  data;
    }

    async fetchPilot(url) {
        let data = localStorage.getItem(url);
        if(!data){
            try {
                const item =  (await axios.get(url)).data;
                const formated = formatObject(item);
                localStorage.setItem(url,JSON.stringify(formated));
               data = formated;
            }catch(e){
              console.log(e);
            }
        }
        return data;
    }

    clean() {
        localStorage.clear();
    }
}
const starWarService = new StarWarService();

export  default starWarService