import React, { useState, useEffect } from 'react';

import './App.css';

import Form from './components/Form.js'
import TeamMember from './components/TeamMembers.js'
import teamData from './components/teamData.js'


function App() {

  const [team, setTeam]= useState([])
  const [member, memberToEdit] =  useState([])
  //const [singleMember, setSingleMember] = useState({})

  // useEffect(() => {
  //   setTeam([...team, singleMember])
  // }, [singleMember])

  function editMember(stuff) {
    const otherstuff = team.map(them => {
      if(them === member){
        console.log('stuff', stuff)
        return them = stuff
      } 
      return them
    })
    setTeam(otherstuff)
  }

  return (
    <div className="App">
      {team.map((mem, index) =>
      <div>
      <TeamMember key={index} name={mem.name} email={mem.email} role={mem.role}/>
      <button onClick={(event) => {console.log(mem); memberToEdit(mem);}}>Edit</button></div>)}
      <Form setTeam={setTeam} team ={team} member={member} editMember={editMember}/>
    </div>
  );
}

export default App;
