import React from 'react'
import { LaunchesInfoQuery } from '../../generated/graphql'
import './style.css'

export interface UserProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends UserProps {
    data: LaunchesInfoQuery
}

const MissionUI: React.FC<Props> = ({ data, handleIdChange }) => {

    return (
        <div className='launchlist'>
            <div className='title'><h1>Launches</h1></div>
            {
                    data.launches?.map((launch, i) => launch && (
                    <div className="launch_click" key={i}
                        onClick={() => handleIdChange(launch.flight_number!)}>

                        <div className="launch_list">
                         {launch?.mission_name} ({launch?.launch_year})  
                        
                    </div>          
                    </div>
                )
                )}
        </div>
    )
}
export default MissionUI;
