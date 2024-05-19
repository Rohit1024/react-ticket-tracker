import { Link, Navigate } from "react-router-dom";
import { Icons } from "@/components/icons";
import { useUser } from "reactfire";
import { SignUpForm } from "@/components/auth/user-signup-form";

export function SignUp() {
  const { data: user } = useUser();
  if (user) return <Navigate to="/dashboard" />;
  return (
    <div className="container flex h-[calc(100vh-140px)] w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to create account
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            to="/signin"
            className="hover:text-brand underline underline-offset-4"
          >
            Already having an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}