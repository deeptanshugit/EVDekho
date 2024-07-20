"use client";
import withLayout from "@/app/components/WithLayout";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import styles from "./signup.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false)
  const router = useRouter();

  const handleSignup = async () => {
    try {
        const res = await axios.post('https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/auth/signup', {name, email, password})
        console.log(res, 'response');
        if (res.status === 201) {
          setShowSnackbar(true);
          setTimeout(() => {
            router.push('/login/login')
          }, 5000)
        }
    } catch(error) {
        console.error(error)
    }
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <h3> SignUp On EVDekho </h3>
      </div>
      <form>
        <TextField fullWidth id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Button fullWidth variant="contained" onClick={handleSignup}>
          Signup
        </Button>
      <Button fullWidth variant="contained" color="error" onClick={() => router.push('/login/login')}>
        Login
      </Button>
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }} onClose={handleCloseSnackbar}>
        Thank you for Signingup! Redirecting to login...
        </Alert>
      </Snackbar>
    </div>
  );
}

export default withLayout(Signup);
