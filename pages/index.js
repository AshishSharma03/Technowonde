import { Alert, Box, Container, Snackbar, Stack } from "@mui/material";
import CustomButtonGroups from "../components/CustomButtonGroups";
import UserListBox from "../components/UserListBox";
import { useState, useEffect, use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchUser } from "../Reducer/UserReducer";
import LoadingScreen from "../components/LoadingScreen";
import AppHeader from "../components/AppHeader";
import dbConnect from "../lib/dbConnect";
import User from "../lib/User";

function index(props) {

  const { users, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [online, isOnline] = useState(false);
  
  useEffect(() => {
    dispatch(FetchUser());
  },[]);

  useEffect(() => {
    isOnline(navigator.onLine);
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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!online}
      >
        <Alert severity="error">Check your connection!</Alert>
      </Snackbar>
      <Container maxWidth={"lg"}>
        <AppHeader />
        <Stack direction={"column"} gap={{ lg: 2, md: 2, sm: 2, xs: 2 }}>
          <CustomButtonGroups />
          <UserListBox users={users} />
        </Stack>
      </Container>
    </Box>
  );
}


function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}


export async function getServerSideProps() {
  // Fetch data from external API
  await dbConnect( );
  const user = await User.find({}).lean();

  console.log(user)
  return { props: {user :   user.map(convertDocToObj)} }
}


export default index;
