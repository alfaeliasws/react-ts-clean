import React, { useEffect, useState } from "react";
import { PageViewProps } from "../../domain/entity/structures/propsStructure";
import { Title } from "../../domain/entity/models/models/constModels";
import { KembaliButton } from "../view-components/KembaliButton";
import { getPost } from "../../data/GetPost";
import { LoadingPage } from "../view-components/LoadingPage";
import { useFade } from "../view-others/hook";

type content = string | undefined

export const PageView: React.FC<PageViewProps> = ({data, onClick}) => {

    useFade('fade-1')

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

            <div className="text-left fade-1">
                <Title>{data.title}</Title>
                {data.author &&
                <Title level={4}>Penulis: {data.author}</Title>
                }
                <Title level={5}>{data.source}</Title>
                <Title level={5} className="mb-5">{date.toLocaleDateString()} {date.toLocaleTimeString()}</Title>
            </div>

            <img alt={data.image} src={data.image} className="max-w-4xl fade-1"/>
            <p className="mb-5 fade-1">{data.description}</p>

            <div>
            {
                loadArticle === true ?
                <div className="h-20 fade-1">
                    <p className="text-left">{data.content}</p>
                    <LoadingPage text="Artikel penuh sedang dimuat! Tunggu beberapa detik!"/>
                </div> :
                <div className="text-left mt-5 fade-1">
                    <p className="tracking-1 leading-1 weighted-font">
                        {content}
                    </p>
                </div>
            }
            </div>
        </div>
    )
}