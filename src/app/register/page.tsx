// src/app/register/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import bgImage from "../../../public/img/bg-login.jpg";
import RegisterForm from "@/components/auth/register-form";
import { useRouter } from "next/navigation";
import { registerUser } from "../../../lib/auth";

const Register: React.FC = () => {
  const router = useRouter();

  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await registerUser(name, email, password);
      router.push("/login");
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white/70 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <RegisterForm onSubmit={handleRegister} />
        <div className="flex items-center justify-center gap-2">
          <p>Sudah punya akun?</p>
          <Link href="/login" className="text-blue-800">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
