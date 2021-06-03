import React from 'react'
import { LaunchMissionInfoQuery } from '../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}

const MissioninfoUI: React.FC<Props> = ({ data }) => {
    // console.log(data)
    if (!data.launch) {
        return <div>No launch available</div>;
    }
    // console.log(data.launch.mission_name)
    return (

        <div className='detail'>
            {/* {JSON.stringify(data)}; */}
            <h3 className='launch_status'> Launch Status:  {data.launch.launch_success ? (
                <span style={{ color: 'green' }}>Success</span>
            ) : (
                <span style={{ color: 'red' }}>Failed</span>
            )}
            </h3>

            <h3 className='launch_year'>Launch Year : {data.launch.launch_year}</h3>

            <h1 className='Mission_Name'>{data.launch.mission_name} ({data.launch.rocket &&  `${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type}`}) </h1>
            
            <h4 className='detail'> {data.launch.details}  </h4>


            {data.launch.links && data.launch.links.flickr_images && (
            <div className='image'>
            {data.launch.links.flickr_images.map(image =>
            image ? <img className='img' src={image}  key={image} alt="" style={{width:'300px', height:'300px'}} /> : null,
          )}
            </div>
            )}
        </div>
    )
}
export default MissioninfoUI;