import {Readability} from "@mozilla/readability";
import axios from "axios";

export const getPost = async (url: string, setStore: Function) => {
    await axios.get(`https://api.scraperapi.com?api_key=ba449c92c99dcc68546281cf96c98c48&url=${url}`).then(function(r2) {

    let doc = document.implementation.createHTMLDocument("New Document");

    var wrapper= doc.createElement('div');
    wrapper.innerHTML= r2.data

    doc.body.appendChild(wrapper)

    const reader = new Readability(doc).parse()

    if(reader){
        setStore(reader.textContent)
    }
})}


