import SightingsRow from "./SightingsRow"
import Table from 'react-bootstrap/Table';

const SightingsTable = ({ sightings }) => {
  return (
    <Table striped bordered hover size="sm" variant="dark">
    <thead>
            <tr>
            {/* <Header />  */}
            <th>When</th>
            <th>Animal's name</th>
            <th>Species</th>
            <th>Location</th>
            <th>Healthy?</th>
            <th>Scientist</th>
            <th>Email</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
                {sightings.map((sighting) => (
                <SightingsRow key={sighting.id} sighting={sighting} />
                // {JSON.stringify(sighting)}
            ))}
            
        </tbody>
    </Table>

    )
};

export default SightingsTable;
