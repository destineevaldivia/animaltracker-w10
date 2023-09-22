import React, { useState, useEffect } from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';

const AddSightingsForm = ({ onAddSighting }) => {
  const [formData, setFormData] = useState({
    sighting_datetime: '',
    individual_animal_spotted: '',
    common_name: '',
    sighting_location: '',
    appeared_healthy: true,
    scientist_name: '',
    scientist_email: '',
  });

  // Additional state to store species and scientists
    const [speciesList, setSpeciesList] = useState([]);
    const [scientistsList, setScientistsList] = useState([]);

  // Fetch species and scientists data when the component mounts
  useEffect(() => {
    // Fetch species data here and set it in the speciesList state
    fetch("http://localhost:8080/api/species")
            .then((response) => response.json())
            .then((species) => {
                setSpeciesList(species);
            })
    // Fetch scientists data here and set it in the scientistsList state
    fetch("http://localhost:8080/api/scientists")
            .then((response) => response.json())
            .then((scientists) => {
                setScientistsList(scientists);
            })  
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new sighting object from formData
    const newSighting = { ...formData };
    onAddSighting(newSighting);

    // Clear the form
    setFormData({
        sighting_datetime: '',
        individual_animal_spotted: '',
        common_name: '',
        sighting_location: '',
        appeared_healthy: true,
        scientist_name: '',
        scientist_email: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="sightingForm">
        <Form.Label>Add New Sighting</Form.Label>
        <Form.Control
          type="text"
          name="individual_animal_spotted"
          value={formData.individual_animal_spotted}
          onChange={handleInputChange}
          placeholder="Animal Name"
        />
        {/* Add more input fields for other attributes */}
        
        {/* Dropdown for selecting species */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="speciesDropdown">
            Select Species
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {speciesList.map((species) => (
              <Dropdown.Item
                key={species.id}
                onClick={() => setFormData({ ...formData, individual_animal_id: species.id })}
              >
                {species.common_name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown for selecting scientist */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="scientistDropdown">
            Select Scientist
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {scientistsList.map((scientist) => (
              <Dropdown.Item
                key={scientist.id}
                onClick={() => setFormData({ ...formData, scientist_id: scientist.id, scientist_email: scientist.contact_email })}
              >
                {scientist.scientist_name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Button type="submit">Add Sighting</Button>
    </form>
  );
};

export default AddSightingsForm;
