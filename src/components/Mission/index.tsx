import React from 'react'
import {useLaunchesInfoQuery} from './../../generated/graphql'
import MissionUI, {UserProps} from './MissionUI'
import './style.css'

export const Mission = (props: UserProps) => {

    const { data, loading, error } = useLaunchesInfoQuery();

    if(loading)
    return <h1>loading..</h1>

    if(error || !data)
    return <h1>error..</h1>
    
    // console.log(data)
    
    return (
        <div className='scroll'>
            <MissionUI data={data} {...props} />
        </div>
    )
}
