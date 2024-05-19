import { Link, Navigate } from "react-router-dom";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/auth/user-signin-form";
import { useUser } from "reactfire";

export function SignIn() {
  const { data: user } = useUser();
  if (user) return <Navigate to="/dashboard" />;

  return (
    <div className="container flex h-[calc(100vh-140px)] w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <div className="flex text-center text-sm text-muted-foreground justify-between">
          <Link
            to="/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>{" "}
          <Link
            to="/forgot-password"
            className="hover:text-brand underline underline-offset-4"
          >
            Forgot Password ?
          </Link>
        </div>
      </div>
    </div>
  );
}
