import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function GetListedButton() {
  return (
    <div>
      <Link to="/apply">
        <Button variant="contained" color="primary" style={{ float: 'left' }}>
          Get Listed
        </Button>
      </Link>
    </div>
  );
}

export default GetListedButton;
