import React, { useContext } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import { UserContext } from "../src/context/users.context";
import { Container } from "@mui/system";
import NavBar from "../src/components/NavBar";

export default function Users() {
  const { user, isLoading } = useContext(UserContext);
  return (
    <Container sx={{ mt: 10 }}>
      <NavBar />
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <List subheader={<Typography variant="body1">Fetched User</Typography>}>
          {user.map((data) => (
            <Link
              href={{
                pathname: `/profile/${data.login.uuid}`,
                query: data,
              }}
            >
              <ListItem
                key={data.login.uuid}
                secondaryAction={
                  <IconButton>
                    <ArrowForwardIos />
                  </IconButton>
                }
                button
              >
                <ListItemText
                  primary={`${data.name.title} ${data.name.first} ${data.name.last}`}
                  secondary={`${data.location.city} in ${data.location.country}`}
                />
                <ListItemAvatar>
                  <Avatar src={data.picture.medium} />
                </ListItemAvatar>
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </Container>
  );
}
