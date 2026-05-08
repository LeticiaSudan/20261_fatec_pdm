//faz requisição com o axios para pexels
import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: '70tZcmtGAnNLCTwcsvSpyhQnMRa8J78F0NQGy6phJa99oiYvKNtzshMx'
    }
})