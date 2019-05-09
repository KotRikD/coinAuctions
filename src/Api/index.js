import axios from 'axios';

export default axios.create({
    baseURL: (process.env.NODE_ENV === 'production') ? 'https://auction.coin-game.ru/api/' : "/api/"
})