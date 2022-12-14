import React from "react";
import { onClickProps, PageProps } from "../../domain/entity/structures/propsStructure";
import {Title} from "../../domain/entity/structures/propsStructure"
import { KembaliButton } from "../view-components/KembaliButton";

type PageViewProps = PageProps & onClickProps

export const PageView: React.FC<PageViewProps> = ({data, onClick}) => {

    var date = new Date(data.date);

    return (
        <div data-testid={`page-view${data.id}`}>
            <KembaliButton onClick={onClick}/>

            <Title>{data.title}</Title>
            <Title level={4}>Penulis: {data.author}</Title>
            <Title level={5}>{data.source}</Title>
            <Title level={5} className="mb-5">{date.toLocaleDateString()} {date.toLocaleTimeString()}</Title>
            <img alt={data.image} src={data.image} className="max-w-4xl"/>

            <div className="text-left mt-5">{data.content}</div>
        </div>
    )
}