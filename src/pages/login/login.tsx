// app/login/page.tsx
"use client";
import withLayout from "@/app/components/WithLayout";
import { Button, TextField } from "@mui/material";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from '../../features/auth/authSlice'
import WelcomeModal from "@/app/components/modal/welcomeModal";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/auth/login", {
        email,
        password,
      });
      const { token } = res.data;
      dispatch(loginSuccess({token: res.data.token, user: res.data.user}))
      setShowModal(true)
      setTimeout(() => {
        setShowModal(false)
        router.push('/')
      }, 3000)
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3> Login To EVDekho </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Button fullWidth variant="contained" color="error" onClick={() => router.push('/signup/signup')}>
          Signup
        </Button>
      </form>
      { showModal && <WelcomeModal showModal={showModal} />}
    </div>
  );
};

export default withLayout(Login);
