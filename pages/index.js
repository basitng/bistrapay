import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
  Box,
} from "@mui/material";
import Users from "./users";
import NavBar from "../src/components/NavBar";
import { UserContext } from "../src/context/users.context";

function Home() {
  const { addUser, isLoading } = useContext(UserContext);

  const handleClick = () => {
    addUser();
  };

  return (
    <React.Fragment>
      <NavBar />
      <Box
        sx={{
          mt: 8,
          p: 10,
          "@media screen and (max-width: 600px)": {
            p: 2,
            mt: 10,
          },
        }}
      >
        {isLoading && (
          <LinearProgress
            sx={{
              position: "fixed",
              Zindex: 1000,
              top: 0,
              left: 0,
              width: "100%",
            }}
            color="secondary"
          />
        )}
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <form>
              <Typography sx={{ mb: 2 }} variant="h3">
                Welcome To <span className="block--span">Bistrapay</span>
              </Typography>
              <Typography sx={{ mb: 5 }} variant="h5">
                Click button to get a user from our database
              </Typography>
              {!isLoading ? (
                <Button onClick={handleClick} variant="contained" size="large">
                  Generate user
                </Button>
              ) : (
                <Button
                  disabled
                  onClick={handleClick}
                  variant="contained"
                  size="large"
                >
                  Generating user
                </Button>
              )}
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Users />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Home;
