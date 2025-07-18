import React, { useState } from "react";
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

type LoginCardProps = {
  onLogin: (data: { username: string; password: string }) => void;
};

export default function RegisterCard({ onLogin }: LoginCardProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin({ username, password });
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src="/logint-background.png"
          alt="Login"
          className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
        />
        <CardTitle>Register your account</CardTitle>
        <CardDescription>
          Create your account continuing the registration instructions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Your Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <CardFooter className="flex flex-col gap-2 mt-6 px-0">
            <Button type="submit" className="w-full cursor-pointer">
              Register
            </Button>
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full cursor-pointer" type="button">
                Back to login
              </Button>
            </Link>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
