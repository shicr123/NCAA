import './App.css'

const teamCard = [
  {schoolName: ''},
  {mascotName: ''},
  {location: ''}
  ]

function Welcome() {

  return <h1> NCAA Basketball </h1>
  return <p> refers to college basketball in the United States, governed by the National Collegiate Athletic Association (NCAA). It includes men's and women's basketball teams from colleges and universities across different divisions (Division I, II, and III), with Division I being the most competitive. The sport is highly popular, especially during March Madness, the annual NCAA tournament where 68 teams compete for the national championship. NCAA Basketball serves as a major talent pipeline for the NBA and WNBA, showcasing future professional stars. </p>
}
function Card() {

  return (
    // <div> or <> are the same 
  <div>
    <img/>
    <h2> {schoolName}</h2>
    <h2> {mascotName}</h2>
    <h2> {location}</h2>
  </div>
  );
}

function cardNames() {
  return (
    {
      teamCard.map(() => (
        <Card {...teamCard} />
      ))
    }
  )

}
function App() {

  return (
    <>
    <Welcome/>
      <Card/>
    </>
  )

}

export default App;
