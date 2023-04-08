import axios from "axios";
import { formatObject } from "../utils/titlize";

export const API = "https://swapi.dev/api";

class StarWarService {
  service = axios.create({ baseURL: API });

  async fetchStarWars() {
    let starShips = (await this.service.get("starships")).data;
    const formated = starShips.results.map((obj) => formatObject(obj));
    return formated;
  }

  async fetchNextDetailObject(url) {
    const item = (await axios.get(url)).data;
    return formatObject(item);
  }
}
const starWarService = new StarWarService();

export default starWarService;
