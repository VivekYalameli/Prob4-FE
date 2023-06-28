import * as React from "react";

import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
    const navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Health Check Monitoring Application
          </Typography>

          <Tooltip title="Create User">
            <IconButton onClick={()=>{navigate('/user')}}>
              <GroupAddIcon color="white" fontSize="medium"/>
            </IconButton>
          </Tooltip>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}