import React, { useEffect } from 'react'
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissioninfoUI from './MissioninfoUI'
import './style.css'

interface UserProps {
    id: number;
}
export const Missioninfo = ({ id }: UserProps) => {
    const { data, loading, error } = useLaunchMissionInfoQuery({
        variables: {
            id: String(id)
        },
    });

    useEffect(() => {
    }, [id]);


    if (loading)
        return <h2>Loading...</h2>

    if (error || !data)
        return <h1 className='s'>PLEASE SELECT LAUNCHES</h1>

    return (
        <div className="z">
            <MissioninfoUI data={data} />
        </div>
    );
}