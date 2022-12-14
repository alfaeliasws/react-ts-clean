import React, { useEffect, useState } from "react";
import { PageViewProps } from "../../domain/entity/structures/propsStructure";
import { Title } from "../../domain/entity/models/models/constModels";
import { KembaliButton } from "../view-components/KembaliButton";
import { getPost } from "../../data/GetPost";
import { LoadingPage } from "../view-components/LoadingPage";
import { Item } from "rc-menu";

type content = string | undefined

export const PageView: React.FC<PageViewProps> = ({data, onClick}) => {

    const [content, setContent] = useState<content>()
    const [loadArticle, setLoadArticle] = useState(true)

    var date = new Date(data.date);

    useEffect(() => {
        if(!content){
            setLoadArticle(true)
        }
        getPost(data.url, setContent)
    },[])

    useEffect(() => {
        if(content){
            setLoadArticle(false)
        }
    },[content])

    return (
        <div data-testid={`page-view${data.id}`}>
            <KembaliButton onClick={onClick}/>

            <Title>{data.title}</Title>
            <Title level={4}>Penulis: {data.author}</Title>
            <Title level={5}>{data.source}</Title>
            <Title level={5} className="mb-5">{date.toLocaleDateString()} {date.toLocaleTimeString()}</Title>

            <img alt={data.image} src={data.image} className="max-w-4xl"/>

            <p>{data.description}</p>

            <div>
            {
                loadArticle === true ?
                <div className="h-20">
                    <p>{data.content}</p>
                    <LoadingPage text="Artikel penuh sedang dimuat! Tunggu beberapa detik!"/>
                </div> :
                <div className="text-left mt-5">
                    <p className="tracking-1 leading-1 weighted-font">
                        {content}
                    </p>
                </div>
            }
            </div>
        </div>
    )
}