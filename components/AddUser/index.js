import {
  Alert,
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Input,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Role = ["Admin", "ss"];

function AddUser({ closeButton }) {
  return (
    <Box>
      <Box display={"flex"} justifyContent="right">
        {closeButton}
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 600,
            padding: "10px 0px",
            textAlign: "center",
          }}
        >
          {" "}
          Add New <span style={{color:"green"}}>User</span>
        </Typography>
        <Stack gap={2}>
          {/* <Alert color="error">sss</Alert> */}
          <Box
            component="input"
            placeholder="Username"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
          />
          <Box
            component="input"
            placeholder="Email"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
          />
          <Box
            component="input"
            placeholder="Password"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
          />
          <Box
            component="select"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
          >
            {Role.map((a, _i) => (
              <Box p={"20px"} component="option">
                {a}
              </Box>
            ))}
          </Box>
        </Stack>
        <Box paddingTop="30px">
          <Button fullWidth variant="contained" sx={{ boxShadow: "none" }}>
            ADD USER
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddUser;
