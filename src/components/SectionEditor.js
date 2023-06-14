import React, { useState } from 'react';

const SectionEditor = ({ section, onDescriptionSave }) => {
  const [newDescription, setNewDescription] = useState(section.description);

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleSaveClick = () => {
    onDescriptionSave(section.id, newDescription);
  };

  return (
    <div>
      <h3>{section.name}</h3>
      <textarea value={newDescription} onChange={handleDescriptionChange} />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default SectionEditor;
