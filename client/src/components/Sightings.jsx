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

    // const onSaveStudent = (newStudent) => {
    //     //console.log(newStudent, "From the parent - List of Students");
    //     setStudents((students) => [...students, newStudent]);
    // }

console.log(sightings)
    return (
        <div className="mybody">
        <div className="sightings">
            
            <SightingsTable sightings={sightings} />
            {/* <SightingsTable sightings={sightings} toDelete={onDelete} toUpdate={onUpdate} /> */}

        </div>
        {/* <MyForm key={editingSightings ? editingSightings.id : null} onSaveSightings={onSaveSightings} editingStudent={editingSightings} onUpdateStudent={updateSightings} /> */}
        </div>
    );
}


export default Sightings