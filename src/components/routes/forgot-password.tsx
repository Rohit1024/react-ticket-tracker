import { Link, Navigate } from "react-router-dom";
import { Icons } from "@/components/icons";
import { useUser } from "reactfire";
import { UserForgotPassword } from "@/components/auth/user-forgot-password";

export function ForgotPassword() {
  const { data: user } = useUser();
  if (user) return <Navigate to="/dashboard" />;

  return (
    <div className="container flex h-[calc(100vh-140px)] w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Forgot your Password ?
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to Reset your Password
          </p>
        </div>
        <UserForgotPassword />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            to="/signin"
            className="hover:text-brand underline underline-offset-4"
          >
            Back to Signin
          </Link>
        </p>
      </div>
    </div>
  );
}
