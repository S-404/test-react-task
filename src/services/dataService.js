import {_api} from "../api";

//просто искусственная задержка для имитации долгого ответа
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default class DataService {
    static async getAllData() {
        return _api.get('test.json').then(await delay(1000))
    }

    static async getFilteredData({colorFilter, darkFilter, formFilter}) {
        //имитация получения результата с указанием параметров для фильтрации
        return _api.get('test.json')
            .then(response => {
                response.data = response.data.filter(item => {
                    return formFilter.includes(item.form) &&
                        colorFilter.includes(item.color) &&
                        (darkFilter === 'all' || (darkFilter === 'dark') === item.dark)

                })
                return response
            })
            .then(await delay(500))
    }
}