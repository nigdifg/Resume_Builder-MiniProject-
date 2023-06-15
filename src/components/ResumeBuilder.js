

import React, { useState } from 'react';
import SectionList from './SectionList';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import '../App.css';
const useStyles = makeStyles((theme) => ({
  resumeBuilderContainer: {
    textAlign: 'center',
    padding: theme.spacing(2),
    width: '80%', // Adjust the width as needed
    maxWidth: '600px',
    margin: '0 auto', // Center the container horizontally
  },
  resumeBuilderTitle: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  resumeBuilderButton: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  sectionListContainer: {
    marginTop: theme.spacing(2),
  },
}));

const ResumeBuilder = () => {
  const classes = useStyles();

  const [sections, setSections] = useState([
    { id: 1, name: 'Profile Summary', order: 1, enabled: true, description: 'Profile summary section' },
    { id: 2, name: 'Academic and Cocurricular Achievements', order: 2, enabled: true, description: 'Academic and cocurricular achievements section' },
    { id: 3, name: 'Summer Internship Experience', order: 3, enabled: true, description: 'Summer internship experience section' },
    { id: 4, name: 'Work Experience', order: 4, enabled: true, description: 'Work experience section' },
    { id: 5, name: 'Projects', order: 5, enabled: true, description: 'Projects section' },
    { id: 6, name: 'Certifications', order: 6, enabled: true, description: 'Certifications section' },
    { id: 7, name: 'Leadership Positions', order: 7, enabled: true, description: 'Leadership positions section' },
    { id: 8, name: 'Extracurricular', order: 8, enabled: true, description: 'Extracurricular section' },
    { id: 9, name: 'Education', order: 9, enabled: true, description: 'Education section' },
  ]);

  const handleSectionReorder = (dragIndex, hoverIndex) => {
    const reorderedSections = [...sections];
    const draggedSection = reorderedSections[dragIndex];
    reorderedSections.splice(dragIndex, 1);
    reorderedSections.splice(hoverIndex, 0, draggedSection);
    setSections(reorderedSections);
  };

  const handleSectionNameChange = (sectionId, newName) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return { ...section, name: newName };
      }
      return section;
    });
    setSections(updatedSections);
    toast.success('Changes saved!', { autoClose: 2000 });

  };

  const handleSectionToggle = (sectionId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return { ...section, enabled: !section.enabled };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const handleSave = () => {
    console.log('Changes saved!');
      toast.info('Saving details...', { autoClose: 2000 });

      setTimeout(() => {
        toast.success('Details saved!', { autoClose: 3000 });
      }, 2000);
  };

  return (
    <div className={classes.resumeBuilderContainer}>
      <Typography variant="h1" className={classes.resumeBuilderTitle}>
        Select your sections
      </Typography>
      <Grid container spacing={0} className={classes.sectionListContainer}>
        <Grid item xs={12} sm={12} md={12}>
          <SectionList
            sections={sections}
            onSectionReorder={handleSectionReorder}
            onSectionNameChange={handleSectionNameChange}
            onSectionToggle={handleSectionToggle}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.resumeBuilderButton}
        disabled={false}
        onClick={handleSave}
      >
        Save and next
      </Button>
      <ToastContainer position="bottom-right" />

    </div>
   
  );
};

export default ResumeBuilder;

