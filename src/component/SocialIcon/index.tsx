import React from "react";
import { Box, Stack } from "@mui/material";
import { FaFacebookF, FaLinkedinIn, FaSkype } from "react-icons/fa";

function SocialIcon() {
  const SocialData = [
    {
      id: 1,
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
    },
    {
      id: 3,
      icon: <FaSkype />,
    },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {SocialData.map((item) => (
        <a href="#" key={item.id} className="socialIcon">
          <Box>{item.icon}</Box>
        </a>
      ))}
    </Stack>
  );
}

export default SocialIcon;
