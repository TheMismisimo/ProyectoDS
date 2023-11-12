import React, { useState, useEffect } from 'react';
import axios from 'axios';

// en teooooriaaaaa funciona, but again it's just a theory

function NameForm() {
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    // Make API call to fetch names
    axios.get('your-api-endpoint')
      .then(response => {
        setNames(response.data);
      })
      .catch(error => {
        console.error('Error fetching names:', error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the selected name
    const selectedNameObject = names.find((name) => name.id === selectedName);

    if (selectedNameObject) {
      // Display more information
      setAdditionalInfo(`ID: ${selectedNameObject.id}, Additional Info: ${selectedNameObject.additionalInfo}`);
    }
  };
  return (
    <div>
      <label>Select a name:</label>
      <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
        <option value="">Select a name</option>
        {names.map((name) => (
          <option key={name.id} value={name.id}>
            {name.name}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Submit</button>

      {/* Display additional information */}
      {additionalInfo && <p>{additionalInfo}</p>}
    </div>
  );
}