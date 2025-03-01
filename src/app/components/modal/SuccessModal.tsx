import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText
} from "@mui/material";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface SuccessModalProps {
  showModal: boolean;
}

export default function SuccessModal(props: SuccessModalProps) {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <Dialog open={props.showModal}>
      <DialogContent>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#36ec6d"}} />
        <DialogContentText>
          Welcome {user.name}! Thank you for signing up. Redirecting you to
          login...
        </DialogContentText>
        <CircularProgress></CircularProgress>
      </DialogContent>
    </Dialog>
  );
}
