import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const SightingsRow = ({sighting, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateSighting) => {
        toUpdate(toUpdateSighting)
    }

    // const onDelete = (toDeleteSighting) => {
    //     toDelete(toDeleteSighting)
    // }

    return (

        <tr>
        <td>{sighting.id}</td>
        <td>{sighting.sighting_datetime}</td>
        <td>{sighting.individual_animal_spotted}</td>
        <td>{sighting.sighting_location}</td>
        <td>{sighting.appeared_healthy ? 'Yes' : 'No'}</td>
        <td>{sighting.scientist_email}</td>
        <td>{sighting.individual_animal_id}</td>
        <td>{sighting.scientist_id}</td>
      </tr>

        // <Button variant="outline-danger" onClick={()=>{onDelete(Sightings)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
        // <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>

    )

}

export default SightingsRow;
