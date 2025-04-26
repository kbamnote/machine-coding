// https://www.reddit.com/r/aww/top/.json?t=all
import axios from "axios"

const Api = axios.create({
    baseURL :'https://www.reddit.com/r/aww/top'
})

export const getImages = () =>{

    return Api.get("/.json?t=all") 
}