"use client";
import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import IMAGES from "@/assets/images";
// import CostumeButton from "@/component/button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styled from "./styled.module.css";
// import { useTheme } from "@mui/material/styled";
import Typed from "typed.js";
import { useRouter } from "next/navigation";

function HomeBanner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Devloper", "UI Devloper", "App Development"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  // const theme = useTheme();

  /*redirect router page*/
  const router = useRouter();
  const handleContactUsClick = () => {
    router.push("/portfolio"); // Adjust the path to your contact page as needed
  };

  return (
    <Box className={styled.HomeBanner} p={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item lg={7} md={7} xs={12}>
            <Box
              className={styled.BannerContent}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Typography
                className={styled.bannerTopTitle}
                sx={{ display: "inline-block" }}
              >
                Welcome to My Porfolio
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "30px", md: "65px" },
                  lineHeight: { xs: "40px", md: "70px" },
                }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Hi, I’m Sonu Kushwah
                <br />I am <span ref={el}></span>
              </Typography>
              <Typography sx={{ margin: "15px 0 30px 0" }}>
                A dedicated individual with in-depth knowledge of programming
                languages and development tools, seeking a position in a
                growth-oriented company where I can use my skills to the
                advantage of the company while having the scope to develop my
                own skills.
              </Typography>
              <Stack
                direction="row"
                spacing={4}
                sx={{
                  flexWrap: {
                    xs: "wrap",
                    sm: "nowrap",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                }}
              >
                {/* <CostumeButton
                  className="AnimatedBtn"
                  sx={{ backgroundColor: theme.palette.primary.main }}
                  onClick={handleContactUsClick}
                >
                  DISCOVER MORE
                </CostumeButton> */}
                {/* <Link
                  href="#"
                  className={`${styled.popup} ${styled.youtube}`}
                  style={{ textDecoration: "none" }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      marginTop: {
                        xs: "20px",
                        sm: "0px",
                      },
                    }}
                  >
                    <Box
                      className={styled.videoIcon}
                      sx={{ background: theme.palette.primary.main }}
                    >
                      <PlayArrowIcon />
                    </Box>
                    <span
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      How it works
                    </span>
                  </Stack>
                </Link> */}
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <Box
              className={styled.BannerImg}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Image
                src={IMAGES.BannerImg}
                alt="bannerImg"
                layout="intrinsic"
                width={500}
                height={500}
                className="img-fluid"
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          {/* <Image
            src={IMAGES.BannerSpring1}
            alt=""
            layout="intrinsic"
            width={50}
            height={50}
            className="img-fluid1"
            style={{
              position: "absolute",
              bottom: "19px",
              left: "65px",
            }}
          /> */}
          {/* <Image
            src={IMAGES.BannerSpring2}
            alt=""
            layout="intrinsic"
            width={50}
            height={50}
            className="img-fluid1"
            style={{
              position: "absolute",
              top: "74px",
              left: "23%",
            }}
          /> */}
          {/* <Image
            src={IMAGES.BannerSpring3}
            alt=""
            layout="intrinsic"
            width={50}
            height={50}
            className="img-fluid1"
            style={{ position: "absolute", bottom: "35px", right: "35px" }}
          /> */}
          {/* <Image
            src={IMAGES.BannerShape}
            alt=""
            layout="intrinsic"
            width={50}
            height={50}
            className="img-fluid1"
            style={{ position: "absolute", right: "40px", top: "40px" }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
}

export default HomeBanner;
