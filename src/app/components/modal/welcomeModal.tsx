import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

interface WelcomeModalProps {
  showModal: boolean;
}

export default function WelcomeModal(props: WelcomeModalProps) {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <Dialog open={props.showModal}>
      <DialogContent>
        <DialogContentText>
          Welcome {user.name}! Thank you for signing in. Redirecting you to
          the home page...
        </DialogContentText>
        <CircularProgress></CircularProgress>
      </DialogContent>
    </Dialog>
  );
}
