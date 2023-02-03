import { Alert, Box, Container, Snackbar, Stack  } from "@mui/material";
import CustomButtonGroups from "../components/CustomButtonGroups";
import UserListBox from "../components/UserListBox";
import { useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {  FetchUser } from "../Reducer/UserReducer";
import LoadingScreen from "../components/LoadingScreen";
import AppHeader from "../components/AppHeader";


function index() {
  // const [Data ,setData] = useState()
  // const [Name, setName] = useState();
   
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [online, isOnline] = useState(false);
  const [load, setLoad] = useState(true);


  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  
  useEffect(() => {
    setTimeout(() => {
      isOnline(navigator.onLine);
      setLoad(false);
    }, 500);
  }, []);

  useEffect(() => {
    const handleisOnline = () => {
      isOnline(navigator.onLine);
    };

    window.addEventListener("offline", handleisOnline);
    window.addEventListener("online", handleisOnline);

    return () => {
      window.removeEventListener("offline", handleisOnline);
      window.removeEventListener("online", handleisOnline);
    };
  }, [online]);
  
  if(load){
    return <LoadingScreen/>
  }

  console.log(users)
  return <Box > 
           <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!online}
      >
        <Alert severity="error">Check your connection!</Alert>
      </Snackbar>
          <Container maxWidth={"lg"}>
              <AppHeader/>
            <Stack direction={"column"} gap={{lg:2,md:2,sm:2,xs:2}}>
              <CustomButtonGroups/>
              <UserListBox users={users}/>
            </Stack>
        </Container>
  </Box>;
}

export default index;
