import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const AddSightingsForm = ({ onAddSightings }) => {

    const [formData, setFormData] = useState({
        id: '',
        sighting_datetime: '',
        individual_animal_spotted: '',
        sighting_location: '',
        appeared_healthy: true,
        scientist_email: '',
        individual_animal_id: '',
        scientist_id: '',
      });


    const handleSubmit = (e) => {
        e.preventDefault();
        
    // Create a new sighting object from formData
    const newSighting = { ...formData };
    onAddSighting(newSighting);
    // Clear the form
    setFormData({
        id: '',
        sighting_datetime: '',
        individual_animal_spotted: '',
        sighting_location: '',
        appeared_healthy: true,
        scientist_email: '',
        individual_animal_id: '',
        scientist_id: '',
        });
    };
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

return (
    <form onSubmit={handleSubmit}>
        {/* Render form fields here */}
        {/* Example input field */}
          <input
            type="text"
            name="individual_animal_spotted"
            value={formData.individual_animal_spotted}
            onChange={handleInputChange}
            placeholder="Animal Name"
          />
        {/* Add more input fields for other attributes */}
          <button type="submit">Add Sighting</button>
     </form>
      );
    };

    export default AddSightingsForm;
