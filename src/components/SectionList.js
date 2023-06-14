import React from 'react';
import SectionItem from './SectionItem';
import { Box } from '@mui/material';

const SectionList = ({ sections, onSectionReorder, onSectionNameChange, onSectionToggle }) => {
  return (
    <Box display="flex" justifyContent="center">
      <ul>
        {sections.map((section, index) => (
          <SectionItem
            key={section.id}
            section={section}
            index={index}
            onSectionReorder={onSectionReorder}
            onSectionNameChange={onSectionNameChange}
            onSectionToggle={onSectionToggle}
          />
        ))}
      </ul>
    </Box>
  );
};

export default SectionList;

