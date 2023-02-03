import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useDispatch } from "react-redux";
import { FetchUser, RemoveUser } from "../../../Reducer/UserReducer";
import EditUserS from "../../EditUser.js";

const TableHeads = ({ children, padding, display, justifyContent }) => (
  <Stack
    direction={"row"}
    gap={1}
    padding={padding}
    display={display}
    alignItems="center"
    justifyContent={justifyContent}
  >
    {children}
  </Stack>
);
const Bcolor = ["#E5FFC7","#92FFB3","#CDFF79","#79D5FF","#B192FF","#FFDA79","#FFCFC7"]
const mon = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function UserList({ even, id, UserName, Email, Role, password }) {
  const [Active, setActive] = useState(true);
  const [DateOfLastLogin, setDateOfLastLogin] = useState();
  const [TimeofLastLogin, setTimeofLastLogin] = useState();
  const dispatch = useDispatch();
  const DeleteUser = () => {
    dispatch(RemoveUser({ id: id }));
    dispatch(FetchUser());
    dispatch(FetchUser());
    dispatch(FetchUser());
    dispatch(FetchUser());
  };
  const [adduserEn, setadduserEn] = useState(false);

  useEffect(() => {
  
    const randomB = Math.random() > 0.5 ? true : false;
    setActive(randomB); 
    
  },[]);

  useEffect(()=>{
    const date = new Date();
      setDateOfLastLogin(
        mon[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
        );
        const k = date.getHours() > 12 ? "PM" : "AM";
        const hour  =(date.getHours() > 12 )? date.getHours() - 12 : date.getHours() ;  
        setTimeofLastLogin(hour + ":" + date.getMinutes() + k);
      
        
  },[])


  return (
    <Box
      p={"10px 20px"}
      sx={{
        backgroundColor: even ? "#f9fafb" : "",
        borderTop: even ? "1px solid #DADADA" : "none",
        borderBottom: even ? "1px solid #DADADA" : "",
      }}
    >
      <Grid container>
        <Grid item lg={6.5} md={6} sm={6} xs={6}>
          <Stack direction={"row"} gap={1}>
            <input type="checkbox" />
            <TableHeads>
              <Avatar
              
                sx={{
                  backgroundColor:Bcolor[Math.floor(Math.random() * Bcolor.length)],
                  
                  justifyContent:"center",
                  height: { lg: "35px", md: "35px", sm: "35px", xs: "20px" },
                  width: { lg: "35px", md: "35px", sm: "35px", xs: "20px" },
                }}
              >
                <Typography sx={{fontSize:{xs:"10px",sm:"15px",md:"15px",lg:"18px",fontWeight:600}}}>{UserName[0]}</Typography>
              </Avatar>
              <Stack>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      lg: "15px",
                      md: "15px",
                      sm: "15px",
                      xs: "11px",
                    },
                  }}
                >
                  {UserName}
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: { lg: "10px", md: "10px", sm: "10px", xs: "9px" },
                  }}
                >
                  {Email}
                </Typography>
              </Stack>
            </TableHeads>
          </Stack>
        </Grid>

        <Grid
          item
          lg={1.5}
          md={1.5}
          sm={2}
          xs={2}
          display="flex"
          justifyContent={"left"}
        >
          <TableHeads>
            <Chip
              label={Active ? "Active" : "Invited"}
              icon={
                <FiberManualRecordIcon
                  color={Active ? "#75A88A" : ""}
                  sx={{ height: "10px", width: "10px" }}
                />
              }
              sx={{
                height: "fit-content",
                padding: "5px 2px",
                fontWeight: 600,
                backgroundColor: Active ? "#effcf4" : "#e7eaef",
                color: Active ? "#75A88A" : "#747b88",
                display: { lg: "block", sm: "block", md: "block", xs: "none" },
              }}
            />

            <FiberManualRecordIcon
              sx={{
                height: "10px",
                width: "10px",
                color: Active ? "#75A88A" : "#747b88",
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
            />
          </TableHeads>
        </Grid>

        <Grid
          item
          lg={1}
          md={1.5}
          sm={2}
          xs={2}
          display="flex"
          justifyContent={"left"}
        >
          <TableHeads>
            <Typography
              sx={{
                color: "gray",
                fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "8.5px" },
              }}
            >
              {Role}
            </Typography>
          </TableHeads>
        </Grid>

        <Grid
          item
          lg={2}
          md={2}
          sm={2}
          xs={2}
          display="flex"
          justifyContent={"center"}
        >
          <TableHeads>
            <Stack>
              <Typography
                sx={{
                  fontWeight: 550,
                  fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "9.5px" },
                }}
              >
                {DateOfLastLogin}
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "9px" },
                }}
              >
                {TimeofLastLogin}
              </Typography>
            </Stack>
          </TableHeads>
        </Grid>
        <Grid item lg={1} md={1} sm={0} xs={0}>
          <TableHeads
            name={""}
            display={{ md: "flex", sm: "none", xs: "none" }}
            justifyContent="center"
          >
            <IconButton onClick={DeleteUser}>
              <DeleteOutlineRoundedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setadduserEn(true);
              }}
            >
              <ModeEditOutlinedIcon />
            </IconButton>
            <Dialog open={adduserEn}>
              <EditUserS
                id_={id}
                UserName_={UserName}
                Email_={Email}
                Role_={Role}
                password_={password}
                closeButton={
                  <Button
                    color="error"
                    onClick={() => {
                      setadduserEn(false);
                    }}
                  >
                    close
                  </Button>
                }
              />
            </Dialog>
          </TableHeads>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;
