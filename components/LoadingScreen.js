import { Box, CircularProgress } from "@mui/material";
import React from "react";

function LoadingScreen() {
  return (
    <Box
      minHeight={"100vh"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <CircularProgress size={"30px"} thickness={5} />
    </Box>
  );
}

export default LoadingScreen;
