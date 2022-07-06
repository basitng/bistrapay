import React, { useId } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const id = useId();
  const { pathname } = useRouter();
  console.log(", This is the pathname", pathname);
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
              <Typography
                color="GrayText"
                sx={{
                  m: 1,
                  cursor: "pointer",
                  color: pathname === link.path && "var(--theme2)",
                  transition: "300ms ease-in",
                  "&:hover": {
                    color: "var(--theme2)",
                  },
                }}
                variant="body1"
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
