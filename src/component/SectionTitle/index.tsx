import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from './style.module.css';

type IPropsTypes = {
  title: string;
  subtitle: string;
  sx?: object; // Make this optional to avoid TypeScript errors if it's not provided
};

function SectionTitle({ title, subtitle, sx = {} }: IPropsTypes) {
  return (
    <Box className={`sectionGapping ${styled.sectionTitle}`} sx={sx}>
      <Typography>{title}</Typography>
      <Typography variant='h2'>{subtitle}</Typography>
    </Box>
  );
}

export default SectionTitle;
