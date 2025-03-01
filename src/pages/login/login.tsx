// app/login/page.tsx
"use client";
import withLayout from "@/app/components/WithLayout";
import { Button, TextField, Typography } from "@mui/material";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import WelcomeModal from "@/app/components/modal/welcomeModal";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const user = useSelector((state: any) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPassword("");
    setEmailError("");

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Invalid Email Address");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await axios.post(
        "https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      const { token } = res.data;
      dispatch(loginSuccess({ token: res.data.token, user: res.data.user }));
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        router.push("/");
      }, 3000);
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
          margin="dense"
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          type="password"
        />
        <div>{error && <Typography color="error">{error}</Typography>}</div>
        <Button
          className="mt-2"
          fullWidth
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          className="mt-2"
          fullWidth
          variant="contained"
          color="error"
          onClick={() => router.push("/signup/signup")}
        >
          Signup
        </Button>
      </form>
      {showModal && <WelcomeModal showModal={showModal} />}
    </div>
  );
};

export default withLayout(Login);
