import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Nav() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>Bingo React Challange</Typography>{" "}
        <Button variant="contained" color="secondary">
          Restart (TODO)
        </Button>
      </Toolbar>
    </AppBar>
  );
}
