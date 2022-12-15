import React, { useState } from "react";
import { Typography} from 'antd'
import { ContentContainerProps } from "../../domain/entity/structures/propsStructure";
import { MappedView } from "./MappedView";
import { PageView } from "./PageView"
import { MouseEvent } from "react";

const {Title} = Typography

export const ContentContainer: React.FC<ContentContainerProps> = ({data}) => {
    const [view, setView] = useState(99)

    const handleView = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setView(parseInt(e.currentTarget.value))
    }

    return (
        <div className="mx-36 my-10" data-testid="content-container">
            {
                view === 99 ?
                    <MappedView data={data} onClick={handleView}/>:
                view < 99 && view >= 0 ?
                    <PageView data = {data[view]} onClick={handleView}/>:
                <Title level={2}>Data Not Found</Title>
            }
        </div>
    )
}