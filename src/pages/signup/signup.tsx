"use client";
import withLayout from "@/app/components/WithLayout";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import styles from "./signup.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SuccessModal from "@/app/components/modal/SuccessModal";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const router = useRouter();

  const validateName = (name: string): boolean => {
    return name.length > 0
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setNameError("")
    setPasswordError("")
    setEmailError("")

    let valid = true;

    if(!validateEmail(email)) {
      setEmailError("Invalid Email Address")
      valid = false
    }

    if(!validateName(name)) {
      setNameError("Name is required")
    }

    if(!validatePassword(password)) {
      setPasswordError("Password must  be atleast 6 characters")
      valid = false
    }

    if(!valid) return;


    try {
        const res = await axios.post('https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/auth/signup', {name, email, password})
        if (res.status === 201) {
          setShowSnackbar(true);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false)
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
        <TextField fullWidth id="name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} margin="dense" error={!!nameError} helperText={nameError} />
        <TextField fullWidth id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} margin="dense" error={!!emailError} helperText={emailError}  />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          error={!!passwordError}
          helperText={passwordError}
          type="password"
        />
      </form>
      <Button fullWidth variant="contained" onClick={handleSignup}> Signup </Button>
      <Button fullWidth variant="contained" color="error" onClick={() => router.push('/login/login')}> Login </Button>
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }} onClose={handleCloseSnackbar}>
        Thank you for Signingup! Redirecting to login...
        </Alert>
      </Snackbar>
      { showModal && <SuccessModal showModal={showModal} />}
    </div>
  );
}

export default withLayout(Signup);
