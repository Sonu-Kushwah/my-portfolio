import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styled from "./styled.module.css";

function Education() {
  const EducationData = [
    {
      id: 1,
      title: "10th High School",
      subtitle: "M.P Board 2009 - 2010",
      content:
        "The Saint Vincent H.S School The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 2,
      title: "12th High School",
      subtitle: "M.P Board 2011 - 2012",
      content:
        "Atit Bal H.S School The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 3,
      title: "B.C.A (GICTS College)",
      subtitle: "MCRPV University 2015",
      content:
        "Makhanlal Chaturvedi National University (2012-2015) The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
  ];
  const ExperirenceData = [
    {
      id: 1,
      title: "GlanceSys Information Technology Pvt. Ltd.",
      subtitle: "Front End Devloper 2020",
      content:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 2,
      title: "SNS System Pvt. Ltd. Gwalior",
      subtitle: "Front End Devloper March-2022-Oct-2023",
      content:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 3,
      title: "Digimonk Technologies: CMMI Certified Company | Mobile",
      subtitle: "Front End Devloper Oct 2023 Till Now",
      content:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
  ];
  return (
    <Box>
      <Box>
        <Container>
          <Grid container spacing={2} alignItems="start">
            <Grid item lg={4} xs={12}>
              <SectionTitle title="PERSONAL INFO" subtitle="Explore Me" />
              
            </Grid>
            <Grid item lg={8} xs={12}>
              <Box className="accordinCustom" mt={10}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Education
                  </AccordionSummary>
                  <AccordionDetails>
                    {EducationData.map((item, index) => (
                      <Box className={styled.education}>
                        <Box className={styled.side_circle_ring}>
                          <Box className={styled.small_yellow_border}>
                            <Box className={styled.small_yellow_circle}></Box>
                          </Box>
                        </Box>
                        <Box className={styled.small_yellow_border_main}>
                          <p className={styled.bachelor}>{item.title} </p>
                          <p className={styled.university}>
                            {item.subtitle}
                          </p>
                          <p className={styled.cursus}>
                           {item.content}
                          </p>
                        </Box>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Experience
                  </AccordionSummary>
                  <AccordionDetails>
                  {ExperirenceData.map((item, index) => (
                      <Box className={styled.education}>
                        <Box className={styled.side_circle_ring}>
                          <Box className={styled.small_yellow_border}>
                            <Box className={styled.small_yellow_circle}></Box>
                          </Box>
                        </Box>
                        <Box className={styled.small_yellow_border_main}>
                          <p className={styled.bachelor}>{item.title} </p>
                          <p className={styled.university}>
                            {item.subtitle}
                          </p>
                          <p className={styled.cursus}>
                           {item.content}
                          </p>
                        </Box>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    Accordion Actions
                  </AccordionSummary>
                  <AccordionDetails>
                  {EducationData.map((item, index) => (
                      <Box className={styled.education}>
                        <Box className={styled.side_circle_ring}>
                          <Box className={styled.small_yellow_border}>
                            <Box className={styled.small_yellow_circle}></Box>
                          </Box>
                        </Box>
                        <Box className={styled.small_yellow_border_main}>
                          <p className={styled.bachelor}>{item.title} </p>
                          <p className={styled.university}>
                            {item.subtitle}
                          </p>
                          <p className={styled.cursus}>
                           {item.content}
                          </p>
                        </Box>
                      </Box>
                    ))}
                  </AccordionDetails>
             
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Education;
