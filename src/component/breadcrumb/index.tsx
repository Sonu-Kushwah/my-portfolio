import { Box, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
import Link from "next/link";
import Styled from "./Styled.module.css";
import React from "react";

// interface BreadcrumbProps {
//   title: string;
//   url: string; // Make url optional
// }

function Breadcrumb(props: any) {
  return (
    <Box className={Styled.breadcrupWrapper}>
      <Typography variant="h1" sx={{ textTransform: "capitalize" }}>
        {props.title}
      </Typography>
      <Stack direction="row" alignContent="center" spacing={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">Home</Link>
          {/* <Link href={props.url}>{props.title}</Link> */}
          {/* <Link color="inherit" href={props.url}>
          {props.title}
        </Link> */}
        </Breadcrumbs>
        <span>/</span>
        <span>{props.title}</span>
      </Stack>
    </Box>
  );
}

export default Breadcrumb;
