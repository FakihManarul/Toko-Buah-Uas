"use client"; // Tambahkan ini di bagian paling atas

import Link from "next/link";
import React, { useState } from "react";
import bgImage from "../../../public/img/bg-login.jpg";
import LoginForm from "@/components/auth/login-form";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white/70 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
