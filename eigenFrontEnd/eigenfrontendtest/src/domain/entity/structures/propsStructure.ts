import { Post } from "./postStructure"
import { MouseEventHandler } from "react"
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

export interface KembaliProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface LoadingProps {
    text: string
}

export type PageViewProps = PageProps & onClickProps