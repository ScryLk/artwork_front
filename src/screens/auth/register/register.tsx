import RegisterCard from "@/components/auth/register/register-card";
import axios from "axios";

export default function Register() {

  const handleRegister = async (data: { username: string; password: string }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/register/",
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
      console.log("Cadastro realizado:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
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
      <RegisterCard onLogin={handleRegister} />
    </div>
  );
}