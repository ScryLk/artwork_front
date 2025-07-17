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


export default function ForgotPasswordCard() {
  return(
  <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src="/logint-background.png"
          alt="Login"
          className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
        />
        <CardTitle>Forgot your password?</CardTitle>
        <CardDescription>
          Enter your e-mail to restore your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your e-mail"
                required
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-6 px-0">
            <Button type="submit" className="w-full cursor-pointer">
              Send
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
  )
}
