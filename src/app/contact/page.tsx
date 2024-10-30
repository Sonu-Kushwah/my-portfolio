import Breadcrumb from "@/component/breadcrumb";
import { Container, Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "./styled.module.css";

function Contact() {
  const contactData = [
    {
      id: 0,
      title: "Phone:",
      content: "8358957395",
    },
    {
      id: 1,
      title: "Email:",
      content: "sonukushwah362@gmail.com",
    },
    {
      id: 2,
      title: "Address:",
      content: "Gwalior",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Contact" />
      <Container>
        <Box className="sectionGapping">
          <Grid container spacing={0}>
            <Grid item lg={4} md={4} xs={12}>
              <Box sx={{ background: "#252734", padding: "50px" }}>
                {contactData.map((item) => (
                  <Box key={item.id} className={styled.contactCard} mb={3}>
                    <Typography variant="h6" className={styled.title}>
                      {item.title}
                    </Typography>
                    <Typography>{item.content}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item lg={8} md={8} xs={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28629.9177251658!2d78.13159885489466!3d26.237645575852806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c65dd50a8135%3A0x11d590dd2c11659f!2sAnand%20Nagar%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1729955990432!5m2!1sen!2sin"
                width="100%"
                height="550"
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Contact;
