import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import Images from "@/assets/images";
import SectionTitle from "@/component/SectionTitle";
import SocialIcon from "@/component/SocialIcon";
import styled from "./style.module.css";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
function Footer() {
  return (
    <div>
      <Box>
        <Container>
          <SectionTitle
            title="Get Latest Updates"
            subtitle="Subscribe For Newsletter"
            sx={{ textAlign: "center", mb: 4 }} // Added margin-bottom for spacing
          />

          <Grid container spacing={2} alignItems="center" mb={5}>
            <Grid item xs={12} md={9}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <a href="" className={styled.contact_list}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box className={styled.iconBox}>
                          <CallIcon />
                        </Box>
                        <Typography>8358957395</Typography>
                      </Stack>
                    </a>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <a href="" className={styled.contact_list}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box className={styled.iconBox}>
                          <AttachEmailIcon />
                        </Box>
                        <Typography>sonukushw ah362@gmail.com</Typography>
                      </Stack>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <SocialIcon />
            </Grid>
          </Grid>
        </Container>
        <Box className={styled.footerBottom}>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={6}>  
                <Typography>© 2021 Lendex Made with by HasThemes</Typography>
              </Grid>
              <Grid item md={6}>
                <Box sx={{display:"flex",justifyContent:"end"}}>
                  <Image src={Images.Logo} alt="" className="img-fluid" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
