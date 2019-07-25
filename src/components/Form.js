import React, {useState, useEffect} from 'react'

function Form(props) {

    const [teamMember, setTeamMember] = useState({name:"", email:"",role:""})
    const [isEditing, setIsEditing] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        if(isEditing === true){
            props.editMember(teamMember)
            setIsEditing(false)
        }else{
        props.setTeam([...props.team, teamMember])
        console.log("teamMember", teamMember)}
    }

    function handleChange(event) {
        const updatedMember = {...teamMember, [event.target.name]:event.target.value}
        console.log( "teamMember", event.target.name, event.target.value, updatedMember)
        setTeamMember(updatedMember)
    }

    useEffect(() =>{
        setTeamMember(props.member || {name: '', email: '', role: ''})
        setIsEditing(true)
        console.log('props.member', props.member)
    },[props.member])

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <fieldset>
                    <div>
                    <label >Name</label>
                    <input type="text"
                    placeholder="Enter your Name"
                    name='name'
                    value={teamMember.name}
                    onChange={handleChange}></input>
                    </div>
                    <div>
                    <label >Email</label>
                    <input type="email" 
                    placeholder="Enter your email"
                    name='email'
                    value={teamMember.email}
                    onChange={handleChange}></input>
                    </div>
                    <div>
                    <label >Role</label>
                    <input type="role" 
                    placeholder="Enter your role"
                    name='role'
                    value={teamMember.role}
                    onChange={handleChange}></input>
                    </div>
                    <button>Submit!</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Form