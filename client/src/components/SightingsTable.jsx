import SightingsRow from "./SightingsRow"

const SightingsTable = ({sightings}) => {
  
  return (
  <>
    {/* <Header />  */}

    <ul>
    {sightings.map((sighting) => (
    <SightingsRow key={sighting.id} sighting={sighting}> {JSON.stringify(sighting)} </SightingsRow>
))}
    </ul>
</>

)
}

export default SightingsTable