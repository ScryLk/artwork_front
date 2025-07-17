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

export default function LoginCard({ onLogin }: LoginCardProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Seu usuário"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-6 px-0">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
            <Link to="/register" className="w-full">
              <Button variant="outline" className="w-full cursor-pointer" type="button">
                Sign Up
              </Button>
            </Link>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}