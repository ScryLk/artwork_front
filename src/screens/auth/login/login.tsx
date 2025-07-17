import LoginCard from "@/components/auth/login/login-card";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  const handleLogin = async (data: { username: string; password: string }) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/users/login/",
      {
        username: data.username,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setLoginMessage("Login realizado com sucesso!");
    console.log("Resposta:", response.data);
  } catch (error) {
    setLoginMessage("Erro ao fazer login. Verifique seus dados.");
    console.error("Erro ao fazer login:", error);
  }
};

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center p-0 m-0 overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/login-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginCard onLogin={handleLogin} />
    </div>
  );
}