import React from "react";
import { onClickProps, PageProps } from "../../domain/entity/structures/propsStructure";
import {Title} from "../../domain/entity/structures/propsStructure"

type PageViewProps = PageProps & onClickProps

export const PageView: React.FC<PageViewProps> = ({data, onClick}) => {

    var date = new Date(data.date);

    return (
        <div>
            <div className="text-left mx-10">
                <button value="99" onClick={onClick} className="kembali">Kembali</button>
            </div>

            <Title>{data.title}</Title>
            <Title level={4}>Penulis: {data.author}</Title>
            <Title level={5}>{data.source}</Title>
            <Title level={5}>{date.toLocaleDateString()} {date.toLocaleTimeString()}</Title>

            <div className="text-left">{data.content}</div>
        </div>
    )
}