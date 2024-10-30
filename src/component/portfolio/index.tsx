"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import IMAGES from "@/assets/images/porfolio";
import AddIcon from "@mui/icons-material/Add";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { Settings } from "react-slick";
import Styled from "./Styled.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/component/SectionTitle";
// import { NextArrow, PrevArrow } from "../CustomArrows";
interface Slide {
  ImgUrl: any;
  name: string;
  designation: string;
}
interface PortfolioProps {
  settings: Settings;
  // slides: React.ReactNode[];
  className: string;
  slides: Slide[];
}

const Portfolio = () => {
  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      id: 0,
      ImgUrl: IMAGES.porfolio1,
      name: "Esther Howard",
      designation: "CEO/Founder",
    },
    {
      id: 1,
      ImgUrl: IMAGES.porfolio2,
      name: "Cameron Williamson",
      designation: "CEO/Founder",
    },
    {
      id: 3,
      ImgUrl: IMAGES.porfolio3,
      name: "Brooklyn Simmons Sr",
      designation: "CEO/Founder",
    },
    {
      id: 4,
      ImgUrl: IMAGES.porfolio4,
      name: "Lincoln Anthony",
      designation: "CEO/Founder",
    },
    {
      id: 5,
      ImgUrl: IMAGES.porfolio5,
      name: "Esther Howard",
      designation: "CEO/Founder",
    },
    {
      id: 6,
      ImgUrl: IMAGES.porfolio6,
      name: "Lincoln Anthony",
      designation: "CEO/Founder",
    },
  ];
  return (
    <Box className="sectionGapping">
      <Container className="customContainer" data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Box
              textAlign="center"
              sx={{
                width: {
                  xs: "100%", // 100% width on extra-small screens (mobile)
                  sm: "55%", // 55% width on small screens and up (tablet and desktop)
                },
                margin: "auto",
              }}
            >
              <SectionTitle title="PORTFOLIO" subtitle="Recent Project"/>
            </Box>
          </Grid>
        </Grid>
        <Slider {...settings} className="teamSlider shocaseSliders">
          {" "}
          {slidesData.map((slide, index) => (
            <Box className={Styled.ourTeam} key={index}>
              <Box
                className={Styled.ourTeamImg}
                sx={{
                  height: "100%",
                  "@media (max-width: 600px)": {
                    maxHeight: "none !important",
                  },
                }}
              >
                <Image src={slide.ImgUrl} alt="ourTeam" className="img-fluid" />
                {/* <Box className={Styled.socialArea}>
                  <Box className={Styled.socialPlus}>
                    <AddIcon />
                  </Box>
                  <Box className={Styled.socialLink}>
                    <Link href="#" className={Styled.socialIcon}>
                      <FacebookOutlinedIcon />
                    </Link>
                    <Link href="#" className={Styled.socialIcon}>
                      <InstagramIcon />
                    </Link>
                    <Link href="#" className={Styled.socialIcon}>
                      <TwitterIcon />
                    </Link>
                    <Link href="#" className={Styled.socialIcon}>
                      <LinkedInIcon />
                    </Link>
                  </Box>
                </Box> */}
              </Box>
              <Box className={Styled.ourTeamContent}>
                <Typography variant="h4">{slide.name}</Typography>
                <Typography>{slide.designation}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Portfolio;
