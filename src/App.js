import React, { useState } from 'react';

import './App.css';

import Form from './components/Form.js'
import TeamMember from './components/TeamMembers.js'
import teamData from './components/teamData.js'


function App() {

  const [teamMember, setTeamMember]= useState(teamData)

  return (
    <div className="App">
      <TeamMember />
      <Form />
    </div>
  );
}

export default App;
