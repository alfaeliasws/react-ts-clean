import axios from "axios"
import {urlAllPost} from '../domain/entity/models/const/url'
import { dataImplementation } from "../domain/interactors/dataStructure"

export const allPost = async (setLoading: Function, setStore: Function) => {
    try {
        const result =
            await axios.get(urlAllPost)
        if(result) {
            setStore(dataImplementation(result.data.articles))
            setLoading(false)
        }
    }catch(err){
        console.error(err)
    }
}

export const allPostWithoutState = async () => {
    const result = await axios.get(urlAllPost)
    return dataImplementation(result.data.articles)
}