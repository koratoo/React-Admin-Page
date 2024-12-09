import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FloatingButton = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default FloatingButton;
