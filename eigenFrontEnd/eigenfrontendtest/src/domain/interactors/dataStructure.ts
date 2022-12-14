import { Post } from "../entity/structures/postStructure"
import { getPostText } from "../../data/GetPostText"

export const dataImplementation = (array: Array<any>) => {
    const mappedArray = array.map((item, i): Post => {

        return {
            id: i,
            date: item.publishedAt,
            title: item.title,
            source: item.source.name,
            author: item.author,
            content: item.content,
            image: item.urlToImage,
            description: item.description,
            url: item.url
        }
    })
    return mappedArray
}