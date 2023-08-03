import {
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";

const CreateListDialog = (props) => {
  const { open, handleClose, handleCreate } = props;

  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose}>
      <DialogTitle>
        <Typography variant={"subtitle1"}>Create List</Typography>
      </DialogTitle>

      <DialogContent>
        <Grid container rowGap={4}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            placeholder="This is my gym list..."
            multiline
            rows={5}
            maxRows={10}
            fullWidth
            variant="standard"
            type={"text"}
            id={"description"}
            label={"Description"}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateListDialog;
