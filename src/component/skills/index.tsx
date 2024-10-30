import React from "react";
import SectionTitle from "../SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "./styled.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Skills() {
  const skillsData = [
    {
      id: 1,
      icon: <FaHtml5 size={40} color="#e34f26" />,
      name: "HTML5",
    },
    {
      id: 2,
      icon: <FaCss3Alt size={40} color="#1572B6" />,
      name: "CSS3",
    },
    {
      id: 3,
      icon: <IoLogoJavascript size={40} color="#f7df1e" />,
      name: "JavaScript",
    },
    {
      id: 4,
      icon: <FaBootstrap size={40} color="#563d7c" />,
      name: "Bootstrap",
    },
    {
      id: 5,
      icon: <FaReact size={40} color="#61dafb" />,
      name: "React",
    },
    {
      id: 6,
      icon: <FaGithub size={40} color="#333" />,
      name: "GitHub",
    },
    {
      id: 7,
      icon: <SiMui size={40} color="#007FFF" />,
      name: "Material UI",
    },
    {
      id: 8,
      icon: <RiNextjsFill size={40} color="#000" />,
      name: "Next.js",
    },
  ];

  return (
    <div>
      <Container>
        <SectionTitle title="My Skills" subtitle="My Expertise" />
        <Grid container spacing={2}>
          {skillsData.map((item) => (
            <Grid item lg={3} key={item.id}>
              <Box className={styled.skillsCard}>
                <Box className={styled.skillIcon}> {item.icon}</Box>
                <Typography variant="h6" className={styled.skillName}>
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Skills;
