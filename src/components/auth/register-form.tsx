// components/auth/register-form.tsx
import React, { useState } from "react";
import { RegisterButton } from "../button";

interface RegisterFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <RegisterButton label="Register" />
      </div>
    </form>
  );
};

export default RegisterForm;
