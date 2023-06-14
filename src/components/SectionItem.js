
import React, { useState } from 'react';
// import SectionEditor from './SectionEditor';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import SaveIcon from '@mui/icons-material/Save';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { green, red } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionItemContainer: {
    '& > *': {
      marginBottom: theme.spacing(2), // Add spacing between elements
    },
  },
  sectionNameContainer: {
    display: 'flex',
    textAlign:'left',
    alignItems: 'center',
  
  },
  sectionName: {
    flex: '1',
  
  },
}));

const SectionItem = ({ section, index, onSectionReorder, onSectionNameChange, onSectionToggle }) => {
  const classes = useStyles();

  
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newSectionName, setNewSectionName] = useState(section.name);

  const handleDragStart = (event) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(index));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedIndex = Number(event.dataTransfer.getData('text/plain'));
    const hoveredIndex = index;
    onSectionReorder(draggedIndex, hoveredIndex);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setNewSectionName(event.target.value);
  };

  const handleSaveClick = () => {
    onSectionNameChange(section.id, newSectionName);
    setIsEditing(false);
  };

  const handleToggleClick = () => {
    onSectionToggle(section.id);
  };

  const handleDescriptionToggle = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <TableRow draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>
      <TableCell>
        <IconButton>
          <DehazeIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleDescriptionToggle}>
          <InfoIcon />
        </IconButton>
      </TableCell>
      <TableCell>{isDescriptionVisible && <p>{section.description}</p>}</TableCell>
      
      <TableCell>
        {isEditing ? (
          <div>
            <input type="text" value={newSectionName} onChange={handleNameChange} />
            <IconButton onClick={handleSaveClick}>
              <SaveIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.sectionNameContainer}>
            <span className={classes.sectionName}>{section.name}</span>
            <div>

            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            </div>
          </div>
        )}
      </TableCell>
      
      <TableCell align="right">
        <IconButton onClick={handleToggleClick}>
          {section.enabled ? (
            <ToggleOnIcon style={{ color: green[500] }} />
          ) : (
            <ToggleOffIcon style={{ color: red[500] }} />
          )}
        </IconButton>
      </TableCell>
     
    </TableRow>
  );
};

export default SectionItem;


