import { Post } from "./postStructure"
import { MouseEventHandler } from "react"
import { Typography } from "antd"

export const {Title, Paragraph} = Typography

export interface ContainerProps {
    title: string
}

export interface ContentContainerProps {
    data: Array<Post>
}

export interface MappedContentProps {
    data: Array<Post>,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface onClickProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface PageProps {
    data: Post
}