import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID db363610ac4d1e8b8756906181f321028bdc585c375aefc334d7b0fb2f87eb35"
  }
});