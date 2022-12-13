import React from "react"
import { PageProps } from "../../domain/entity/structures/propsStructure"
import {Card} from "antd"

export const CardMapped: React.FC<PageProps> = ({data}) => {
    return (
        <div className="bg-inherit text-inherit">
            <Card style={{
                    width: 300,
                    textAlign: "left"
                }} className="bg-inherit text-inherit border-none"
                >
                <h2 className="text-inherit">{data.title}</h2>
                <h5 className="text-inherit">{data.author}</h5>
            </Card>
        </div>
    )
}