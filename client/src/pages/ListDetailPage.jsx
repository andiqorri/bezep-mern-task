import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ListDetailPage = () => {
  const { listId } = useParams();

  // todo fetch list data from server

  // this page displays the list with the given listId and its tasks

  return (
    <div>
      <Typography>You are viewing:{listId}</Typography>
    </div>
  );
};

export default ListDetailPage;
