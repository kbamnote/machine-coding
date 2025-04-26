import axios from "axios";

const  Api =axios.create({
    baseURL :' https://api.frontendeval.com/fake'
})

export const getFood = (mil) =>{

    return Api.get(`/food/${mil}`)
}