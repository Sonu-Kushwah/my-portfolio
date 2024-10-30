"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import IMAGES from "@/assets/images";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import Styled from "./Styled.module.css";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
// import CustomButton from "../button";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  { id: "home", name: "Home", url: "/" },
  { id: "about", name: "About", url: "/about-us" },
  { id: "services", name: "Services", url: "/service" },
  { id: "project", name: "Project", url: "/project" },
  { id: "blog", name: "blog", url: "/blog" },
  { id: "contact", name: "Contact", url: "/contact" },
  // { id: "contact", name: "Contact", url: "/contact-us" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(1);

  const router = useRouter();
  const handleContactUsClick = () => {
    router.push("/contact-us");
    setMobileOpen(!mobileOpen);
    // Adjust the path to your contact page as needed
  };

  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log({ scrolled });
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ background: "black" }}
        p={2}
      >
        <Image
          src={IMAGES.Logo}
          alt="bannerImg"
          style={{ width: "155px", height: "35px" }}
        />
        <CloseIcon sx={{ color: "#fff" }} onClick={handleDrawerToggle} />
      </Stack>
      <List sx={{ background: "black" }}>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={handleDrawerToggle}
              sx={{
                textAlign: "center",
                borderTop: "1px solid rgba(56, 56, 56, 0.5)",
                borderBottom:
                  index === navItems.length - 1
                    ? "1px solid rgba(56, 56, 56, 0.5)"
                    : "none",
              }}
              component={Link}
              href={item.url}
            >
              <ListItemText
                primary={item.name}
                sx={{ textTransform: "capitalize", color: "#fff" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="start"
        spacing={1}
        sx={{ marginBottom: "10px" }}
      >
        <MailOutlineIcon sx={{ fontSize: "30px", color: "#fff" }} />
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#fff",
              textAlign: "left",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Message Us
          </Typography>
          <Link href="#" style={{ color: "#fff", fontSize: "14px" }}>
            info@digimonk.in
          </Link>
        </Box>
      </Stack>
      {/* <CustomButton
        className="AnimatedBtn navBtn"
        sx={{ backgroundColor: theme.palette.primary.main }}
        onClick={handleContactUsClick}
        sx={{ textTransform: "capitalize", padding: "5px 16px !important" }}
      >
        Let&lsquo;s Talk
      </CustomButton> */}
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="header">
      {/*<Box className={`${Styled.header} ${scrolled > 50 ? Styled.scrolled : ""}`}>*/}
      <CssBaseline />
      <AppBar component="nav" sx={{ padding: "7px 0" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            sx={{
              width: {
                xs: "100%", // 100% width for mobile view
                lg: "unset", // 75% width for desktop view
                md: "unset",
              },
            }}
            direction="row"
            justifyContent="space-between"
            flexDirection="row-reverse"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Image
              src={IMAGES.Logo}
              alt="bannerImg"
              style={{ width: "155px", height: "35px" }}
            />
          </Stack>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.url}
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                }}
                className={`${
                  pathname === item.url ? Styled.navMenu : Styled.active
                } navLink`}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Stack
            direction="row"
            alignItems="start"
            spacing={2}
            sx={{
              "@media (max-width: 900px)": {
                display: "none",
              },
            }}
          >
            <Stack direction="row" alignItems="start" spacing={1}>
              <MailOutlineIcon sx={{ fontSize: "30px" }} />
              <Box>
                <Typography
                  sx={{ fontSize: "12px", fontFamily: '"Poppins", sans-serif' }}
                >
                  Message Us
                </Typography>
                <Link href="#" style={{ color: "#fff", fontSize: "14px" }}>
                  info@digimonk.in
                </Link>
              </Box>
            </Stack>
            {/* <CustomButton
              className="AnimatedBtn navBtn"
              onClick={handleContactUsClick}
            >
              Let&lsquo;s Talk
            </CustomButton> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        {/* Assuming you want to display breadcrumb based on current page */}
      </Box>
    </Box>
  );
}
