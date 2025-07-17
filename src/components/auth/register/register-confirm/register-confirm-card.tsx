import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterConfirmOtp from "./register-confirm-otp";

type RegisterConfirmCardProps = {
  userId?: string;
  onConfirm?: (otp: string) => void;
};

import { useState } from "react";

export default function RegisterConfirmCard({ userId, onConfirm }: RegisterConfirmCardProps) {
  const [otp, setOtp] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onConfirm) {
      onConfirm(otp);
    }
    // Aqui você pode exibir uma mensagem ou limpar o campo, se quiser
  }

  return (
    <div className="justify-center flex w-screen h-screen items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <img
            src="/logint-background.png"
            alt="Login"
            className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
          />
          <CardTitle>Confirm Your Account</CardTitle>
          <CardDescription>
            Enter the register code to confirm your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-6">
              <div className="grid gap-2">
                <RegisterConfirmOtp value={otp} onChange={setOtp} />
              </div>
            </div>
            <CardFooter className="flex-col gap-2 mt-6 px-0">
              <Button type="submit" className="w-full cursor-pointer">
                Confirm
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}