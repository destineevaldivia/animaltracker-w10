import SightingsRow from "./SightingsRow"
import Table from 'react-bootstrap/Table';

const SightingsTable = ({ sightings }) => {
  return (
    <Table striped bordered hover size="sm">
    <thead>
            <tr>
            {/* <Header />  */}
            <th>ID of Sighting</th>
            <th>When</th>
            <th>Animal's name</th>
            <th>location of Sighting</th>
            <th>Appeared Healthy?</th>
            <th>Scientist's email</th>
            <th>ID of Animal</th>
            <th>ID of Scientist</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr> */}
                {sightings.map((sighting) => (
                
                // <td>
                <SightingsRow key={sighting.id} sighting={sighting} />
                // </td>
            ))}
            {/* </tr> */}
        </tbody>
    </Table>

    )
};

export default SightingsTable;
// {sightings.map((sighting) => (
//     <SightingsRow key={sighting.id} sighting={sighting}> {JSON.stringify(sighting)} </SightingsRow>
//     ))}