import React, { useState } from "react";
import { Button } from "@mui/material";
import CreateListDialog from "../components/CreateListDialog.jsx";
import ListItems from "../components/ListItems.jsx";

const HomePage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleCreateList = () => {
    //   todo add logic to create list
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Create List
        </Button>
      </div>

      <main style={{ margin: "20px 0px" }}>
        <ListItems />
      </main>

      <CreateListDialog
        open={openDialog}
        handleClose={handleClose}
        handleCreate={handleCreateList}
      />
    </div>
  );
};

export default HomePage;
