import React, { useId } from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import NavBar from "../src/components/NavBar";

export default function Profile() {
  const rows = [
    { id: 1, col1: "Abdul Basit", col2: "Ajaga" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "First Name", width: 150 },
    { field: "col2", headerName: "Last Name", width: 150 },
  ];

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
              <Avatar>A</Avatar>
              <Typography variant="h5" color="GrayText">
                Ajagaban
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ height: 300, width: "100%" }}>
              <DataGrid rows={rows} columns={columns} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
