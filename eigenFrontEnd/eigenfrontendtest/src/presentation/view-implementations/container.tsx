import React, {useState, useEffect} from 'react';
import {Typography} from 'antd'
import {ContainerProps} from '../../domain/entity/structures/propsStructure'
import { allPost } from '../../data/callAllPost';
import { LoadingPage } from '../view-components/LoadingPage';
import { ContentContainer } from './ContentContainer';
import { useFade } from '../view-others/hook';

const {Title} = Typography

const Container: React.FC<ContainerProps> = ({title}) => {
    const [loading, setLoading] = useState(true)
    const [store, setStore] = useState([])

    useFade('fade-1')

    useEffect(() => {
        allPost(setLoading, setStore)
    },[])

    return (
        <div data-testid="container">
            <Title className='tracking-1 fade-1'>{title}</Title>
            <div>
                {
                    loading ?
                        <LoadingPage text="Loading..."/> :
                        <ContentContainer data={store} />
                }

            </div>
        </div>
    )
}

export default Container