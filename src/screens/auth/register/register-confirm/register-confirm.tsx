import { useParams, useNavigate } from "react-router-dom";
import RegisterConfirmCard from "@/components/auth/register/register-confirm/register-confirm-card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RegisterConfirm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  // Realiza login antes de consultar usuário
  const login = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/users/login/",
        {
          username: "testefalsoemail",
          password: "00113150Ll@"
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  useEffect(() => {
    async function checkUser() {
      try {
        await login(); // faz login antes da consulta
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}`, {
          withCredentials: true,
        });
        if (response.data.is_confirmed) {
          navigate("/register");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }
    if (id) checkUser();
  }, [id, navigate]);

  const handleConfirm = async (otp: string) => {
    try {
      await login(); // faz login antes de confirmar
      const response = await axios.post(
        `http://127.0.0.1:8000/users/register/confirmation/${id}`,
        `{ "confirmation_token": "${otp}" }`,
        {
          headers: {
            "Content-Type": "text/plain",
          },
          withCredentials: true,
        }
      );
      setMessage("Usuário confirmado com sucesso!");
      console.log("Usuário confirmado:", response.data);
    } catch (error) {
      setMessage("Erro ao confirmar usuário.");
      console.error("Erro ao confirmar usuário:", error);
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
      <RegisterConfirmCard userId={id} onConfirm={handleConfirm} />
      {message && (
        <div className="mt-4 px-4 py-2 rounded bg-white bg-opacity-80 text-black text-center font-semibold shadow">
          {message}
        </div>
      )}
    </div>
  );
}