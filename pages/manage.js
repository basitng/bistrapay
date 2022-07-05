import { Remove, Add } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useContext, useId } from "react";
import NavBar from "../src/components/NavBar";
import { UserContext } from "../src/context/users.context";

export default function Manage() {
  const { user } = useContext(UserContext);

  return (
    <Container sx={{ marginTop: 17 }}>
      <NavBar />
      <Paper>
        <List>
          {user.map((user) => (
            <ListItem
              key={user.login.uuid}
              secondaryAction={
                <Box sx={{ display: "flex" }}>
                  <IconButton onClick={() => (user.account_balance += 1)}>
                    <Add />
                  </IconButton>
                  <IconButton>
                    <Remove />
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar src={user.picture.medium} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
                secondary={`Account Balance: ${user.account_balance}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
