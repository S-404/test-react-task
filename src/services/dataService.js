import {_api} from "../api";

//просто искусственная задержка для имитации долгого ответа
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default class DataService {
    static async getAllData() {
        return _api.get('test.json').then(await delay(1000))
    }
}