import axios from 'axios';

const API_KEY = '6388ZWMYQX1UOFNX';
const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol`;
const ROOT_URL2 = `apikey=${API_KEY}`

export const FETCH_DAILY_ADJUSTED = 'FETCH_DAILY_ADJUSTED';

export function fetchDailyAdjusted(symbol) {
    const url = `${ROOT_URL}=${symbol}&${ROOT_URL2}`;
    const request = axios.get(url);

    return {
        type: FETCH_DAILY_ADJUSTED,
        payload: request
    };
}