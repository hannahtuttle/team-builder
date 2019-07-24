import React from 'react'

import teamData from './teamData.js'

function TeamMember(props){

    // console.log(teamData["member-1"])
    // const member1 = teamData["member-1"]

    return (<div>
        <h3>Name</h3>
        <p>{props.name}</p>
        <h3>Email</h3>
        <p>{props.email}</p>
        <h3>Role</h3>
        <p>{props.role}</p>
    </div>)
}
export default TeamMember