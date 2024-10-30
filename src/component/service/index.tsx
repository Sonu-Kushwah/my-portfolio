import { Box, Grid,Grid2, Container, Typography } from "@mui/material";
import React from "react";
import styled from "./styled.module.css";
import { FaServicestack } from "react-icons/fa6";
import SectionTitle from "../SectionTitle";
function ServiceComponent() {
  const serviceData = [
    {
      id: 1,
      icon: <FaServicestack />,
      title: "Figma To HTML",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 2,
      icon: <FaServicestack />,
      title: "Wireframe to HTML",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 3,
      icon: <FaServicestack />,
      title: "Responsive Design",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 4,
      icon: <FaServicestack />,
      title: "React Website",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 5,
      icon: <FaServicestack />,
      title: "PDF Template Design",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 6,
      icon: <FaServicestack />,
      title: "Email Template Design",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 7,
      icon: <FaServicestack />,
      title: "Redesign Website",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 8,
      icon: <FaServicestack />,
      title: "SEO Friendly Website",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
    {
      id: 9,
      icon: <FaServicestack />,
      title: "Template Customize",
      content:
        "Converting Figma designs to HTML involves translating visual elements into code. Start by exporting assets from",
    },
  ];
  return (
    <div>
      <Box className="sectionGapping">
        <Container>
          <SectionTitle title="Service" subtitle="What I Do"/>
          <Grid container spacing={2}>
            {serviceData.map((item) => (
              <Grid item key={item.id} md={4} sm={6} xs={12}>
                <Box className={styled.serviceCard}>
                  <Box className={styled.serviceIcon}>
                    {item.icon}
                  </Box>
                  <Box className={styled.serviceContent}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ServiceComponent;
