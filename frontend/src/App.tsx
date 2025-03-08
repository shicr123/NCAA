// Import JSON file
import teamsData from "./CollegeBasketballTeams.json"; 
import "./App.css";
import { useState } from "react";

// welcome section
function Welcome() {
  return (
    <>
      <h1>NCAA Basketball</h1>
      <p>
        NCAA Basketball refers to college basketball in the United States, governed by the National Collegiate Athletic Association (NCAA).
        It includes men's and women's basketball teams from colleges and universities across different divisions (Division I, II, and III),
        with Division I being the most competitive. The sport is highly popular, especially during March Madness.
      </p>
    </>
  );
}
// make sure what types they are 
function Card({ school, mascot, city, state }: { school: string; mascot: string; city: string; state: string }) {
  return (
    // class to use css
    <div className="team-card">
      <h2>{school}</h2>
      <h3>Mascot: {mascot}</h3>
      <p>Location: {city}, {state}</p>
    </div>
  );
}

function TeamList() {
  // Accessing the `teams` array from the imported object
  const [teamList] = useState(teamsData.teams); 

  return (
    <div className="team-list">
      {teamList.map((team) => (
        <Card key={team.tid} school={team.school} mascot={team.name} city={team.city} state={team.state} />
      ))}
    </div>
  );
}

function App() {
  return (
    // <div> is the same as <>
    // to return the welcome and team list 
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
