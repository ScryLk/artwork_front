import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";

type RestorePasswordCardProps = {
  onRestore: (data: { password: string }) => void;
  loading?: boolean;
};

export default function RestorePasswordCard({
  onRestore,
  loading = false,
}: RestorePasswordCardProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }
    onRestore({ password });
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src="/logint-background.png"
          alt="Login"
          className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
        />
        <CardTitle>Forgot your password?</CardTitle>
        <CardDescription>
          Enter your new password to restore your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="password">New password</Label>
              <Input
                id="password"
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm new password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-6 px-0">
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Send"}
            </Button>
            <Link to="/login" className="w-full">
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                type="button"
              >
                Back to login
              </Button>
            </Link>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
