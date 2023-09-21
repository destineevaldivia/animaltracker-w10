import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Sightings from './Sightings';

const ListSightings = () => {

    // this is my original state with an array of sightings 
    const [sightings, setSightings] = useState([]);

    // this is the state needed for the UpdateRequest
    // const [editingStudent, setEditingStudent] = useState(null)

    // A function to fetch the list of sightings that will be loaded anytime that list changes
    const loadSightings = () => {
        fetch("http://localhost:8080/api/sightings/:id")
            .then((response) => response.json())
            .then((students) => {
                setSightings(sightings);
            });
    }

    useEffect(() => {
        loadSightings();
    }, [sightings]);

    // const onSaveStudent = (newStudent) => {
    //     //console.log(newStudent, "From the parent - List of Students");
    //     setStudents((students) => [...students, newStudent]);
    // }


    //A function to control the update in the parent (student component)
    // const updateStudent = (savedStudent) => {
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 
    //     loadStudents();
    // }

    //A function to handle the Delete funtionality
    // const onDelete = (student) => {
    //     //console.log(student, "delete method")
    //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);

    // }



    return (
        <div className="mybody">
        <div className="list-sightings">
            <h2>Animal Tracker for Endangered Marine Life</h2>
            <ul>
                {sightings.map((sightings) => {
                    return <li key={sightings.id}> <Student student={student} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} />
        </div>
    );
}


export default ListStudents