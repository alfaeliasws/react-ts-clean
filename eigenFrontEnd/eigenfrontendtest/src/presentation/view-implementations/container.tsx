import React, {useState, useEffect} from 'react';
import {Typography} from 'antd'
import {ContainerProps} from '../../domain/entity/structures/propsStructure'
import { allPost } from '../../data/callAllPost';
import { LoadingPage } from '../view-components/LoadingPage';
import { ContentContainer } from './ContentContainer';

const {Title} = Typography

const Container: React.FC<ContainerProps> = ({title}) => {
    const [loading, setLoading] = useState(true)
    const [store, setStore] = useState([])

    useEffect(() => {
        allPost(setLoading, setStore)
    },[])

    return (
        <div>
            <Title>{title}</Title>
            <div>
                {
                    loading ?
                        <LoadingPage/> :
                        <ContentContainer data={store} />
                }

            </div>
        </div>
    )
}

export default Container