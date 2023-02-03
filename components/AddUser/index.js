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
import { useDispatch } from "react-redux";
import { AddOneUser, FetchUser } from "../../Reducer/UserReducer";

const RoleOp = ["Admin", "Sales Leader","Sales rep"];

function AddUser({ closeButton }) {
const [Email, setEmail] = useState();
const [Password, setPassword] = useState();
const [UserName, setUserName] = useState();
const [Role, setRole] = useState(RoleOp[0]);
const [error, setError] = useState(false) 
const [errorM, setErrorM] = useState("") 
const dispatch = useDispatch();



  const onHandleClick =()=>{
    
    if(Email && Password && UserName){
      var Ere = /\S+@\S+\.\S+/;
      if (!Email.match(Ere)) {
        setErrorM("Email not valid");
        setError(true);
      } else {
        setError(false);
        let pass =
        /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
        if(Password.match(pass)){
          setError(false);
          dispatch(AddOneUser({email:Email,password:Password,userName:UserName,role :Role}))
          dispatch(FetchUser()) 
          dispatch(FetchUser()) 
          dispatch(FetchUser()) 
        }else{

          setErrorM(
            "Password  must 8 to 16 characters which contain at least one numeric digit, one uppercase and one lowercase letter and  one Special Symbol."
          );
          setError(true);

        }
      }
    }else{
        setError(true)
        setErrorM("Please fill all the field")
    }
  

  }

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
          {(error)?
          <Alert color="error" sx={{maxWidth:"250px",textAlign:"center"}}>{errorM}</Alert>
          :""}
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
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <Box
            component="input"
            type={"email"}
            placeholder="Email"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
            onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
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
            onChange={(e)=>{setRole(e.target.value)}}
          >
            {RoleOp.map((a , _i) => (
              <Box key={_i}  p={"20px"} component="option">
                {a}
              </Box>
            ))}
          </Box>
        </Stack>
        <Box paddingTop="30px">
          <Button fullWidth variant="contained" sx={{ boxShadow: "none" }} onClick={onHandleClick}>
            ADD USER
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddUser;
