import RestorePasswordCard from "@/components/auth/login/forgot-password/restore-password/restore-password-card";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RestorePassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRestore = async (data: { password: string }) => {
    setLoading(true);
    try {
      await axios.put(
        `http://127.0.0.1:8000/users/login/restorepassword/${token}`,
        {
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000); // aguarda 2 segundos antes de redirecionar
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
    } finally {
      setLoading(false);
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
      <RestorePasswordCard onRestore={handleRestore} loading={loading} />
      {success && (
        <Alert className="fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-sm z-50">
          <AlertTitle>Sucesso!</AlertTitle>
          <AlertDescription>
            Sua senha foi alterada com sucesso. Você será redirecionado para o login.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}