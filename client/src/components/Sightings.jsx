import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import AddSightingsForm from './AddSightingsForm';
import SightingsTable from './SightingsTable';

const Sightings = () => {

    // this is my original state with an array of sightings 
   const [sightings, setSightings] = useState([]);

    // this is the state needed for the UpdateRequest
    // const [editingStudent, setEditingStudent] = useState(null)

    // A function to fetch the list of sightings that will be loaded anytime that list changes
    useEffect(() => {
        loadSightings();
    }, []);

    const loadSightings = () => {
        fetch("http://localhost:8080/api/sightings")
            .then((response) => response.json())
            .then((sightings) => {
                setSightings(sightings);
            })
            .catch((error) => {
                console.error('Error fetching data in loadSightings fnx:', error);
            })
    }
    //taking original list of sightings, adding the new sighting to that list and updating the variable to that list
    const onAddSighting = (newSighting) => {
        //console.log(newSighting, "From the parent - List of Sighting");
        setSightings((sightings) => [...sightings, newSighting]);
    }

console.log(sightings)
    return (
        <div className="mybody">
        <div className="sightings">
            
            <SightingsTable sightings={sightings} />
            {/* <SightingsTable sightings={sightings} toDelete={onDelete} toUpdate={onUpdate} /> */}

            < AddSightingsForm onAddSighting={onAddSighting}/>
        </div>
        {/* <MyForm key={editingSightings ? editingSightings.id : null} onSaveSightings={onSaveSightings} editingSightings={editingSightings} onUpdateSightings={updateSightings} /> */}
        </div>
    );
}


export default Sightings;