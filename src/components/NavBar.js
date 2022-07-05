import React, { useId } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export default function NavBar() {
  const id = useId();
  const links = [
    { name: "Home", id, path: "/" },
    { name: "users", id, path: "/users" },
    { name: "manage", id, path: "/manage" },
  ];
  return (
    <AppBar variant="elevation" elevation={1} color="inherit">
      <Toolbar>
        <Typography variant="h5">Bistrapay</Typography>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ display: "flex" }}>
          {links.map((link) => (
            <Link key={link.id} href={link.path}>
              <Typography color="GrayText" sx={{ m: 1 }} variant="body1">
                {link.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
