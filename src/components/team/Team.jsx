import React from 'react'
import './team.css'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
      <Back title='Team'/>
     <secction className="team padding">
        <div className="container grid">
            <TeamCard/>
        </div>
     </secction>
    </>
  )
}

export default Team
