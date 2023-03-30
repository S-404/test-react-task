import axios from "axios";

export const _api = axios.create(
    // withCredentials: true,
    // baseURL: API_URL
)

/*
тут мог бы быть interceptor
для реквеста с передачей токена в хедере
и
для респонса с обработкой ошибки и повторного обновления токена
*/
