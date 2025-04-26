//   `https://api.frontendeval.com/fake/food/${input}`

  import axios from "axios";
  
  const Api = axios.create({
    baseURL:'https://api.frontendeval.com/fake'
  })

  export const searchResultApi = (input) =>{

    return Api.get(`/food/${input}`)
  }