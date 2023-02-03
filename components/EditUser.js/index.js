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
import { useDispatch, useSelector } from "react-redux";
import { EditUser, FetchUser } from "../../Reducer/UserReducer";

const RoleOp = ["Admin", "Sales Leader", "Sales rep"];

function EditUserS({ closeButton, id_, Email_, Role_, password_, UserName_ }) {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [UserName, setUserName] = useState();
  const [Id, setId] = useState();
  const [Role, setRole] = useState();
  const [error, setError] = useState(false);
  const [errorM, setErrorM] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id_);
    setEmail(Email_);
    setPassword(password_);
    setUserName(UserName_);
    setRole(Role_);
    setId(id_);
  }, [setEmail, setPassword, setUserName, setRole, setId]);

  const onHandleClick = () => {
    if (Email && Password && UserName) {
      var Ere = /\S+@\S+\.\S+/;
      if (!Email.match(Ere)) {
        setErrorM("Email not valid");
        setError(true);
      } else {
        setError(false);
        let pass =
          /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
        if (Password.match(pass)) {
          setError(false);
          dispatch(
            EditUser({
              email: Email,
              password: Password,
              userName: UserName,
              role: Role,
              id: Id,
            })
          );
          dispatch(FetchUser());
          dispatch(FetchUser());
          dispatch(FetchUser());
        } else {
          setErrorM(
            "Password  must 8 to 16 characters which contain at least one numeric digit, one uppercase and one lowercase letter and  one Special Symbol."
          );
          setError(true);
        }
      }
    } else {
      setError(true);
      setErrorM("Please fill all the field");
    }
  };

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
          Edit <span style={{ color: "green" }}>User</span>
        </Typography>
        <Stack gap={2}>
          {error ? (
            <Alert
              color="error"
              sx={{ maxWidth: "250px", textAlign: "center" }}
            >
              {errorM}
            </Alert>
          ) : (
            ""
          )}
          <Box
            component="input"
            placeholder="Username"
            value={UserName}
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Box
            component="input"
            type={"email"}
            placeholder="Email"
            value={Email}
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Box
            component="input"
            placeholder="Password"
            value={Password}
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box
            value={Role}
            component="select"
            sx={{
              padding: "10px",
              width: "250px",
              fontSize: "15px",
              borderRadius: "5px",
              border: "1px solid #E4E4E4",
            }}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            {RoleOp.map((a, _i) => (
              <Box key={_i} p={"20px"} component="option">
                {a}
              </Box>
            ))}
          </Box>
        </Stack>
        <Box paddingTop="30px">
          <Button
            fullWidth
            variant="contained"
            sx={{ boxShadow: "none" }}
            onClick={onHandleClick}
          >
            Change
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditUserS;
