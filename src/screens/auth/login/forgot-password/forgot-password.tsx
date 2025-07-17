import ForgotPasswordCard from "@/components/auth/login/forgot-password/forgot-password-card";

export default function ForgotPassword() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center p-0 m-0 overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/login-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ForgotPasswordCard />
    </div>
  );
}
