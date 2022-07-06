import React, { useId } from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import NavBar from "../../src/components/NavBar";
import { UserContext } from "../../src/context/users.context";
import { useRouter } from "next/router";

export default function Profile() {
  const params = useRouter();
  const { query } = params;
  const { getUserProfile } = React.useContext(UserContext);
  const [user, setUser] = React.useState(getUserProfile(query.profile)[0]);

  console.log("====================================user", user);

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Grid container spacing={3} sx={{ mt: 17 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "grid",
                placeContent: "center",
                placeItems: "center",
                border: "1px solid var(--outline)",
                borderRadius: 2,
                p: "50px 20px",
              }}
            >
              <Avatar
                src={user.picture.large}
                sx={{ width: 200, height: 200 }}
              />
              <Typography variant="h5" color="GrayText">
                {user.name.title} {user.name.first} {user.name.last}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem button>
                <ListItemText secondary={"Gender"} primary={user.name.title} />
              </ListItem>
              <ListItem button>
                <ListItemText
                  secondary="First Name"
                  primary={user.name.first}
                />
              </ListItem>
              <ListItem button>
                <ListItemText secondary="Last Name" primary={user.name.last} />
              </ListItem>
              <ListItem button>
                <ListItemText
                  secondary="Account Balance"
                  primary={`$${user.account_balance}`}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  secondary="Country"
                  primary={user.location.country}
                />
              </ListItem>
              <ListItem button>
                <ListItemText secondary="City" primary={user.location.city} />
              </ListItem>
              <ListItem button>
                <ListItemText secondary="State" primary={user.location.state} />
              </ListItem>
              <ListItem button>
                <ListItemText secondary="Phone Number" primary={user.phone} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
