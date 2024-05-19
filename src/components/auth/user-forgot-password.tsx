import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  forgotPasswordSchema,
  forgotPasswordSchemaType,
} from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Icons } from "@/components/icons";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { auth } from "@/firebase/config";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export function UserForgotPassword() {
  const form = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function onSubmit(values: forgotPasswordSchemaType) {
    setLoading(true);
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        toast.success("Password Reset Link Sent", {
          description: "Please check your email to reset your password",
        });
        navigate("/signin");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        toast.error(error.code, {
          description: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We Will send you an email that will allow you to reset your
                password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Send Password Reset Link
          <span className="sr-only">Send Password Reset Link</span>
        </Button>
      </form>
    </Form>
  );
}
